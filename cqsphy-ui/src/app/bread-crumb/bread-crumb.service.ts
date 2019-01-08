import { hierarchy } from 'd3';
import { Subject, Observable } from 'rxjs/rx';
import { shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { EntityData } from 'bi-component-library';
import { EntityApiData } from 'bi-component-library';
import { EntityHierarchyPropertyData } from 'bi-component-library';
// import { EntityViewServiceParams } from '../entityView/entityView.service';

@Injectable()
export class BreadcrumbService {
  private _currentEntity: EntityData;
  private _currentEntityHierarchy: EntityData[] = [];
  public entityApiData: EntityApiData[] = [];
  private _entityHierarchyProperties = EntityHierarchyPropertyData;
  private _cache$: Observable<EntityData>;

  // Observable EntityData source
  private _currentEntitySource = new Subject<EntityData>();

  // Observable EntityData stream
  currentEntity$ = this._currentEntitySource.asObservable();

  // temp; needs to be set so that users can land on different Hierarchy Summary
  defaultHierarchyNumber = 0;
  entityId = '';

  localStorageMap: any;


  constructor() {
    console.log('BREADCRUMB SERVICE INSTANTIATED');
    this._currentEntity = new EntityData();
    this.localStorageMap = new Map<string, any>();
    // this._userHierarchyAccessService.getUserHierarchyAccess('Z00277674')
    //   .subscribe(data => {
    //     this._entityApiData = <Array<EntityApiData>>data;
    //     this.setCurrentEntity(this.defaultHierarchyNumber, this.entityId);
    //   },
    //     error => console.log(error)
    //   );
    this.check('s');
  }

  getEntityName(entityHierarchyLevel) {
    var entityName = 'ERROR';
    switch (entityHierarchyLevel) {
      case 0: entityName = 'clinic';
        break;
      case 1: entityName = 'area';
        break;
      case 2: entityName = 'region';
        break;
      case 3: entityName = 'operating group';
        break;
      case 4: entityName = 'division';
        break;
      case 5: entityName = 'company';
        break;
      default: entityName = 'ERROR';
    }
    return entityName;
  }

  setDefaultEntity() {
    //this.setCurrentEntity(this.defaultHierarchyNumber, this.entityId);
  }

  getNativeWindow() {
    return window;
  }

  setCurrentEntity(hierarchyLevelNumber: number, entityId?: string): string {
    let entityApiData: EntityApiData;

    if (entityId === undefined || entityId === '') {
      entityApiData = this.entityApiData[0];
    } else {
      entityApiData = this.entityApiData
        .filter(x => x[this._entityHierarchyProperties[hierarchyLevelNumber].idColumn] === entityId.trim())[0];
    }

    if (!entityApiData) {
      const hierarchyLabel = this._entityHierarchyProperties[hierarchyLevelNumber].hierarchyLabel;
      return `Invalid ${hierarchyLabel} Id, or you do not have access to ${hierarchyLabel} Id: ${entityId}`;
    }

    // setting the current Entity properties
    this._currentEntity.id = entityApiData[this._entityHierarchyProperties[hierarchyLevelNumber].idColumn];
    this._currentEntity.fullName = this._currentEntity.id
      + '-' + entityApiData[this._entityHierarchyProperties[hierarchyLevelNumber].nameColumn];
    this._currentEntity.hierarchyName = this._entityHierarchyProperties[hierarchyLevelNumber].hierarchyLabel;
    this._currentEntity.hierarchyNumber = hierarchyLevelNumber;
    this._currentEntity.parentHierarchyNumber = hierarchyLevelNumber < 5 ? hierarchyLevelNumber + 1 : null;
    this._currentEntity.ParentHierarchyId = hierarchyLevelNumber < 5 ?
      entityApiData[this._entityHierarchyProperties[hierarchyLevelNumber + 1].idColumn] : null;
    this.setCurrentEntityHierarchy(entityApiData);
    this._currentEntitySource.next(this._currentEntity);

    return '';
  }

  private setCurrentEntityHierarchy(entity: EntityApiData) {
    this._currentEntityHierarchy.splice(0);
    this._currentEntityHierarchy.push(this._currentEntity);
    for (let i: number = this._currentEntity.parentHierarchyNumber; i < this._entityHierarchyProperties.length; i++) {
      if (this._currentEntity.hierarchyNumber < 5) {
        const ent = new EntityData;
        ent.id = entity[this._entityHierarchyProperties[i].idColumn];
        ent.fullName = i < 5 ? ent.id + '-' + entity[this._entityHierarchyProperties[i].nameColumn] : 'FKC Company';
        ent.hierarchyName = this._entityHierarchyProperties[i].hierarchyLabel;
        ent.hierarchyNumber = i;
        ent.parentHierarchyNumber = i < 5 ? i + 1 : null;
        ent.ParentHierarchyId = i < 5 ? entity[this._entityHierarchyProperties[i + 1].idColumn] : null;
        this._currentEntityHierarchy.push(ent);
      } else {
        this.currentEntity.fullName = 'FKC Company';
        i = 5;
      }

    }
    this._currentEntityHierarchy.sort(function (a, b) {
      return a.hierarchyNumber - b.hierarchyNumber;
    }).reverse();
  }

  get currentEntity() {
    return this._currentEntity;
  }

  getCurrentEntity() {
    if (!this._cache$) {
      this._cache$ = this.currentEntity$.pipe(shareReplay(1));
    }
    return this._cache$;
  }


  set currentEntity(value) {
    this._currentEntity = value;
    this._currentEntitySource.next(this._currentEntity);
  }

  get currentEntityHierarchy() {
    return this._currentEntityHierarchy;
  }

  set currentEntityHierarchy(value) {
    this._currentEntityHierarchy = value;
  }

  getEntityQueryParam() {
    return { id: this._currentEntity.id, level: this._currentEntity.hierarchyNumber };
  }

  set(key: string, value: any) {
    this.localStorageMap.set(key, value);
  }

  get(key: string): any {
    return this.localStorageMap.get(key);
  }

  check(key: string): boolean {
    return this.localStorageMap.has(key);
  }

  isParamChanged(stored: object, input: object): boolean {
    let changed = true;
    if (stored) {
      changed = false;
      for (const i in input) {
        if (!changed && input.hasOwnProperty(i)) {
          changed = input[i] !== stored[i] ? true : false;
        }
      }
    }
    return changed;
  }
}

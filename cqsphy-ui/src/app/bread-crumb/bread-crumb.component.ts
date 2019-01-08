import { Subscription } from 'rxjs/rx';
import { Routes, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BreadcrumbService } from './bread-crumb.service';
import { EntityData, EntityApiData } from 'bi-component-library';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit, OnDestroy {
  @Input() entityData: EntityApiData[] = [];
  currentEntityHierarchy: EntityData[] = [];
  private _breadCrumbServiceSubscription: Subscription;


  constructor(public _breadcrumbService: BreadcrumbService,
    private _router: Router,
    private _route: ActivatedRoute) {
  }

  ngOnInit() {
   /*  this.currentEntityHierarchy = this._breadcrumbService.currentEntityHierarchy;
    this._breadCrumbServiceSubscription = this._breadcrumbService.currentEntity$.subscribe(
      currentEntity => {
        this.currentEntityHierarchy = this._breadcrumbService.currentEntityHierarchy;
      }
    ); */
  }

  onBreadCrumbClick(entity: EntityData) {
    event.preventDefault();
    this._breadcrumbService.currentEntity = entity;
    this.currentEntityHierarchy = this._breadcrumbService.currentEntityHierarchy = this._breadcrumbService.currentEntityHierarchy
      .slice(0, this._breadcrumbService.currentEntityHierarchy.indexOf(entity) + 1);
  }

  ngOnDestroy() {
    this._breadCrumbServiceSubscription.unsubscribe();
  }
}

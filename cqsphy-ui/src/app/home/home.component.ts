import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityApiData, EntitySearchData } from 'bi-component-library';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/operator/toPromise';
import { Subscription } from 'rxjs/rx';
import { environment } from '../../environments/environment';
import { UserInfoService } from '../auth/user-info.service';
import { BreadcrumbService } from './../bread-crumb/bread-crumb.service';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public instance: HomeComponent;
  dataAsOfDate = '';

  cachedEntityData: EntityApiData[] = [];

  status = false;

  showHeader = false;

  userShortName: string;
  message: string;

  private _breadCrumbServiceSubscription: Subscription;
  private _entityId: string;
  private _hierarchylevel: number;

  public entityApiDataResolverData: EntityApiData[];


  constructor(private cookieService: CookieService,
    public breadCrumbService: BreadcrumbService,
    private userInfoService: UserInfoService,
    private _homeService: HomeService,
    private route: ActivatedRoute,
    private _router: Router,
    private _http: HttpClient) {
    this.instance = this;
  }

  ngOnInit() {
    this.entityApiDataResolverData = this.route.snapshot.data['entityApiDataResolverData'];
    this.breadCrumbService.entityApiData = this.cachedEntityData = this.entityApiDataResolverData;
    const userId = this.cookieService.get(environment.USER_ID_COOKIE_NAME);
    // this.dataAsOfDate = this.breadCrumbService.get('dataAsOfDate');
    this.dataAsOfDate = this._homeService.getDataAsOfDate();
    this.breadCrumbService.set("dataAsOfDate", this.dataAsOfDate);
    
    if (this.breadCrumbService.check('entityId') || this.breadCrumbService.check('hierarchylevel')) {
      this._entityId = this.breadCrumbService.get('entityId');
      if (this.breadCrumbService.check('hierarchylevel')) {
        this._hierarchylevel = parseInt(this.breadCrumbService.get('hierarchylevel'), 0);
      } else {
        this._hierarchylevel = 0;
      }
    } else if (this.breadCrumbService.check(userId + '-userSecurityInfo')) {
      console.log('in user security');
      const userSecInfoJSON = this.breadCrumbService.get(userId + '-userSecurityInfo');
      const userSecInfo = JSON.parse(userSecInfoJSON);
      this.userShortName = userSecInfo.userId;
      if (userSecInfo.npi == null) {
        console.log('groupNames: ', userSecInfo.groupNames);
        if (userSecInfo.groupNames.includes('USERS_CORP')) {
          // Summary Monitoring View
          this._hierarchylevel = 5;
        } else if (userSecInfo.groupNames.includes('USERS_DDIETLEAD')) {
          // Division Level Summary
          this._hierarchylevel = 4;
        } else if (userSecInfo.groupNames.includes('USERS_DQUAVP')) {
          // OP Group Summary
          this._hierarchylevel = 3;
        } else if (userSecInfo.groupNames.includes('USERS_DRQM')) {
          // Region Summary
          this._hierarchylevel = 2;
        } else if (userSecInfo.groupNames.includes('USERS_DODIR') || userSecInfo.groupNames.includes('USERS_DAMGR')) {
          // Area Summary
          this._hierarchylevel = 1;
        }
      } else if (userSecInfo.divisionMAB || userSecInfo.corporateMAB || userSecInfo.md) {
        // NPI is not null
        this._hierarchylevel = 5;
      }
    }
/*     if (this._entityId || this._hierarchylevel) {
      const message = this.breadCrumbService.setCurrentEntity(this._hierarchylevel, this._entityId);
      if (message !== '') {
        this.message = message;
        console.log(message);
      }
    } else if (!this.breadCrumbService.currentEntity.id) {
      this.breadCrumbService.setDefaultEntity();
    } */
    //this._router.navigate(['/group-page']); 
    this._router.navigate(['home/physician-summary']);
    // this._router.navigate(['home/group-page']);
    /* if (this.breadCrumbService.currentEntity.id) {
      if (this.breadCrumbService.currentEntity.hierarchyNumber !== 0) {
        this._router.navigate(['home/non-clinic-summary']);
      } else {
        this._router.navigate(['home/clinic-summary']);
      }
    } */
  }

  getUserShortName() {
    return this.userShortName;
  }

  showNavBar() {
    this.status = !this.status;
  }

  getUserAccessInfo() {
    const userIdValue = this.cookieService.get(environment.USER_ID_COOKIE_NAME);
    const userSecInfoJSON = this.breadCrumbService.get(userIdValue + '-userSecurityInfo');
    const userSecInfo = JSON.parse(userSecInfoJSON);

    const medicalAdvBoardFlag = userSecInfo.corporateMAB ? 'C' : (userSecInfo.divisionMAB ? 'D' : null);
    const divisionIdValue = userSecInfo.divisionIds;
    return { mabFlag: medicalAdvBoardFlag, userId: userIdValue, divisionIds: divisionIdValue };
  }

  setSelectedEntity(selectedEntity: EntitySearchData) {
    if (selectedEntity) {
      this.breadCrumbService.setCurrentEntity(selectedEntity.hierarchyLevelNumber,
        selectedEntity.entityId);
    }
  }

  ngOnDestroy() {
    if (this._breadCrumbServiceSubscription) {
      this._breadCrumbServiceSubscription.unsubscribe();
    }
  }

}

import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild,
    Resolve
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { EntityApiData } from 'bi-component-library';

import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BreadcrumbService } from './../bread-crumb/bread-crumb.service';

@Injectable()
export class EntityApiDataResolver implements Resolve<EntityApiData[]> {
    constructor(private router: Router, private cookieService: CookieService, private breadcrumbService: BreadcrumbService, private _http: HttpClient) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EntityApiData[]> | Promise<EntityApiData[]> | EntityApiData[] {
        // let id = route.paramMap.get('country-id');
        // if (this.breadcrumbService.entityApiData) {
        //     return this.breadcrumbService.entityApiData;
        // } else {
            const userIdValue = this.cookieService.get(environment.USER_ID_COOKIE_NAME);
            const userSecInfoJSON = this.breadcrumbService.get(userIdValue + '-userSecurityInfo');
            const userSecInfo = JSON.parse(userSecInfoJSON);

            var medicalAdvBoardFlag = userSecInfo.corporateMAB ? 'C' : (userSecInfo.divisionMAB ? 'D' : null);
            var divisionIdValue = userSecInfo.divisionIds;
            const requestBody = {
                "mabFlag": medicalAdvBoardFlag,
                "userId": userIdValue,
                "divisionIds": divisionIdValue
            }
            console.log('requestBody = ' + JSON.stringify(requestBody));
            const httpOptions = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
            };
            return this._http.post<EntityApiData[]>(environment.userHierarchyAccessByUserIdApiUrl, requestBody, httpOptions);
        // }
    }
} 
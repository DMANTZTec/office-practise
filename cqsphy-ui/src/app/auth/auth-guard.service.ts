import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { BreadcrumbService } from '../bread-crumb/bread-crumb.service';
import { UserInfoService } from './user-info.service';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private cookieService: CookieService,
    private userInfoService: UserInfoService,
    private breadCrumbService: BreadcrumbService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    //const userId = this.cookieService.get(environment.USER_ID_COOKIE_NAME);

    // // Comment below 2 lines before building the war until deb_user url param is added - START
    // userId = 'Z00277674';
    // // userId = 'Z00405344';
  var userId  = '36694';
    this.cookieService.set(environment.USER_ID_COOKIE_NAME, "36694");
    // // Comment below 2 lines before building the war until deb_user url param is added - END

    console.log('User ID in AuthGuard = [' + userId + ']');

    if (userId === null || userId === '') { 
      if (location.hostname === 'localhost') {
        console.error('no debug user provided.');
        alert('no debug user provided. Use "debugUser" query parameter to pass debug user Id.');
        return false;
      }
      window.location.href = environment.SSO_LOGIN_URL;
      return false;
    }

    // First thing is to check if the access flag is in cookie service
    if (this.breadCrumbService.check(userId + '-userSecurityInfo')) {
      const userSecInfoJSON = this.breadCrumbService.get(userId + '-userSecurityInfo');
      const userSecInfo = JSON.parse(userSecInfoJSON);
      if (userSecInfo['access']) {
        return true;
      } else {
        this.router.navigate(['access-denied']);
        return false;
      }
    } else {
     return this.userInfoService.getUserInfo(userId).then((result) => {
        const userInfoData: any = result;
        userInfoData['access'] = (userInfoData.npi === null) || (userInfoData.npi != null);
          console.log(" >>>--userInfo Data -->"+JSON.stringify(userInfoData))
        this.breadCrumbService.set(userId + '-userSecurityInfo', JSON.stringify(userInfoData));
        if (!this.breadCrumbService.check('modality')) {
          this.breadCrumbService.set('modality', userInfoData.defaultModality);
        }
        this.breadCrumbService.set('dataAsOfDate', userInfoData.dataAsOfDate);

        if (userInfoData['access']) {
          return true;
        } else {
          this.router.navigate(['access-denied']);
          return false;
        }
      });
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}

import { BreadcrumbService } from './bread-crumb/bread-crumb.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserInfoService } from './auth/user-info.service';
import { environment } from '../environments/environment';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _breadCrumbService: BreadcrumbService,
    private _cookieService: CookieService, private _userInfoService: UserInfoService,private router: Router ) {
  }

  ngOnInit() {
    const entityid = this.getUrlParameter('entityid');
    const hierarchylevel = this.getUrlParameter('hierarchylevel');
    const modality = this.getUrlParameter('modality');
    const debugUser = this.getUrlParameter('debugUser');
    const providerLoginName = this.getUrlParameter('loginName');

    if (location.hostname === 'localhost' && debugUser) {
      this._cookieService.set(environment.USER_ID_COOKIE_NAME, debugUser);
    }
    
    const ssoLoginName = this._cookieService.get(environment.USER_ID_COOKIE_NAME);

    console.log(" >>>--logged in user --->"+ ssoLoginName);
    console.log(" >>>--provider loginName --->"+ providerLoginName);

    if(providerLoginName === ssoLoginName){
      console.log(" >>>--logged in User is Provider.--->");
      this._userInfoService.getUserInfo(providerLoginName).then((data)=>{
        const prvdrUserInfoData: any = data;
        console.log(" >>>--Provider Data-> "+JSON.stringify(data));
        console.log(" >>>--Provider UserId-> "+prvdrUserInfoData.userId+" NPI:"+prvdrUserInfoData.npi+" entityId:"+entityid);
        if(entityid === prvdrUserInfoData.npi){
          console.log(" >>>--Navigating to Phy Summary View.--->");
          //this.router.navigate(['home/physician-summary']);
        }else{
          this.router.navigate(['access-denied']);
        }
      });
    }else{
      console.log(" >>>--logged in User is NOT Provider.--->");
    }
    

    if (hierarchylevel && entityid) {
      if (hierarchylevel === '0') {
        this._breadCrumbService.set('entityId', entityid);
        this._breadCrumbService.set('hierarchylevel', hierarchylevel);
      } 
      if (hierarchylevel === '1') {
        this._breadCrumbService.set('pracGrpId', entityid);
        this._breadCrumbService.set('pracGrpLevel', hierarchylevel);
      }
    }

    // if (entityid) {
    //   this._breadCrumbService.set('entityId', entityid);
    // }
    // if (hierarchylevel) {
    //   this._breadCrumbService.set('hierarchylevel', hierarchylevel);
    // }
    if (modality) {
      this._breadCrumbService.set('modality', modality);
      const sbOptions: any = { modality: { id: modality, label: modality + ' patients' } };
      this._breadCrumbService.set('sbOptions', sbOptions);
    }
  }

  getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
}

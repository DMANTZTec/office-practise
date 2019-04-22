import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
//import { CrisisCenterComponent } from './crisis_center/crisis-center/crisis-center.component';
//import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home/crisis-center-home.component';
import { SettingComponentComponent } from './setting-component/setting-component.component';
import { SettingsProfileComponent } from './setting-component/settings-profile/settings-profile.component';
import { SettingsAboutComponent } from './setting-component/settings-profile/settings-about/settings-about.component';
//import { EmployeeResolverService } from './employee-resolver.service';
import { EmployeeComponent } from './employee/employee.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//import { EmployeeDetailsGuardService } from './employee/employee-details-guard.service';
import { EmployeedetailsService } from './employee/employeedetails.service';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeListResolverService } from './employee/employee-list-resolver.service';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateEmployeeDeacivateService } from './create-employee/create-employee-deacivate.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    SubcomponentComponent,
    
    
    SettingComponentComponent,
    
    
    SettingsProfileComponent,
    
    
    SettingsAboutComponent,
    
    
    EmployeeComponent,
    
    PagenotfoundComponent,
    
    EmployeeDetailComponent,
    
    CreateEmployeeComponent,
    
    LoginComponent,
    
    UpdateEmployeeComponent,
    
    DeleteEmployeeComponent
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeListResolverService,CreateEmployeeDeacivateService,EmployeedetailsService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
import { SettingComponentComponent } from './setting-component/setting-component.component';
import { SettingsProfileComponent } from './setting-component/settings-profile/settings-profile.component';
import { SettingsAboutComponent } from './setting-component/settings-profile/settings-about/settings-about.component';
//import { EmployeeResolverService } from './employee-resolver.service';
import { EmployeeComponent } from './employee/employee.component';
import { not } from '@angular/compiler/src/output/output_ast';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeedetailsService } from './employee/employeedetails.service';
import { EmployeeListResolverService } from './employee/employee-list-resolver.service';

const routes: Routes = [
  {
    path:'getEmployees',
    component:EmployeeComponent,
    resolve:{employeeList:EmployeeListResolverService}

  },
  {
    path:'employees/:id',
    component:EmployeeDetailComponent,
    canActivate:[EmployeedetailsService]

  },
  {
    path:'notFound',
    component:PagenotfoundComponent
  },
  {
    path:'settings',
    component:SettingComponentComponent,
    children:[
      {
        path:'profile',
        component: SettingsProfileComponent,
        children:[
          {
          path:'about',
           component: SettingsAboutComponent
          
        }
        ]
      }
    ]

},
  
  {
    path:'**',
    redirectTo:'AppComponent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateEmployeeDeacivateService } from './create-employee/create-employee-deacivate.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthService } from './login/auth.service';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';

const routes: Routes = [
  {
    path:'getEmployees',
    component:EmployeeComponent,
    resolve:{employeeList:EmployeeListResolverService}

  },
  {
    path:'save',
    component:EmployeeComponent
  },
  {
    path:'updateEmployee',
    component:UpdateEmployeeComponent
  },
  {
    path:'deleteEmployee',
    component:DeleteEmployeeComponent

  },
  {
    path:'employees/:id',
    component:EmployeeDetailComponent,
    canActivate:[EmployeedetailsService]

  },
  {
    path:'createEmployee',
    component:CreateEmployeeComponent,
    canDeactivate:[CreateEmployeeDeacivateService]
  },
  {
    path:'notFound',
    component:PagenotfoundComponent
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[AuthService]

  },
  {
    path:'settings',
    component:SettingComponentComponent,
    canActivateChild:[EmployeedetailsService],
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

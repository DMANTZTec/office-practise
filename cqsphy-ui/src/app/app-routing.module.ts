

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
import { AccessDeniedComponent } from './error/access-denied/access-denied.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EntityApiDataResolver } from './resolvers/entity-api-data-resolver';
import { MessageComponent } from './util/message/message.component';
import { DoctorsCornerComponent} from './doctors-corner/doctors-corner.component';
import { PhysicianSummaryComponent } from './physician-summary/physician-summary.component';
import { TabsComponent } from './physician-summary/tabs/tabs.component';
import { PatientSummaryViewComponent } from './physician-summary/patient-summary-view/patient-summary-view.component';
import { PatientDetailsViewComponent } from './physician-summary/patient-details-view/patient-details-view.component';
import { KpiHeatmapViewComponent } from './physician-summary/kpi-heatmap-view/kpi-heatmap-view.component';
import { GroupSummaryViewComponent } from './physician-summary/group-summary-view/group-summary-view.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { TabsComponent as GroupPageTabsComponent } from './group-page/tabs/tabs.component';
import { GroupSummaryComponent } from './group-page/group-summary/group-summary.component';
import { PatientDetailsComponent } from './group-page/patient-details/patient-details.component';
import { HeatmapComponent } from './group-page/heatmap/heatmap.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
   /*  resolve: {
      entityApiDataResolverData: EntityApiDataResolver
    }, */
    children: [
      {
        path: 'physician-summary',
        component: PhysicianSummaryComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'physician-summary-tabs',
          },
          {
            path: 'physician-summary-tabs',
            component: TabsComponent,
            children: [
              {
                path: '',
                pathMatch: 'full',
                redirectTo: 'patient-summary-view'
              },
              {
                path: 'patient-summary-view',
                component: PatientSummaryViewComponent
              },
              {
                path: 'patient-details-view',
                component: PatientDetailsViewComponent
              },
              {
                path: 'kpi-heatmap-view',
                component: KpiHeatmapViewComponent
              },
              {
                path: 'group-summary-view',
                component: GroupSummaryViewComponent
              },
            ]
          },
          {
            path: 'message',
            component: MessageComponent
          },
        ]
      },
    ]
  },
  {
    path: 'group-page',
    component: GroupPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'group-page-tabs',
      },
      {
        path: 'group-page-tabs',
        component: GroupPageTabsComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'group-summary'
          },
          {
            path: 'group-summary',
            component: GroupSummaryComponent
          },
          {
            path: 'patient-details',
            component: PatientDetailsComponent
          },
          {
            path: 'heatmap',
            component: HeatmapComponent
          },
        ]
      }
    ]
  },
  {
    path: 'doctors-corner',
    component: DoctorsCornerComponent    ,
    canActivate: [AuthGuard]
        
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [EntityApiDataResolver]
})
export class AppRoutingModule { }

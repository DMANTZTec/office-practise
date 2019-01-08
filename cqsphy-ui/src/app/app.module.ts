import { ModalService } from './modal/modal.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {
  EntitySearchModule, ErrorPageModule, SentenceBuilderModule,
  SentenceBuilderNotifyService, SidebarModule, WaitModalModule, WaitModalInterceptor
} from 'bi-component-library';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth-guard.service';
import { UserInfoService } from './auth/user-info.service';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { BreadcrumbService } from './bread-crumb/bread-crumb.service';
import { AccessDeniedComponent } from './error/access-denied/access-denied.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { MessageComponent } from './util/message/message.component';

import { PhysicianSummaryModule } from './physician-summary/physician-summary.module';
import { PhysicianSummaryService } from './physician-summary/physician-summary.service';
import { PatientSummaryViewService } from './physician-summary/patient-summary-view/patient-summary-view.service';
import { PatientDetailsViewService } from './common/patientList/patientList.service';
import { SharedService } from './shared/shared.service';

import { GroupPageModule } from './group-page/group-page.module';
import { KPIHeatMapViewService } from './physician-summary/kpi-heatmap-view/kpi-heatmap-view.service';
import { GroupSummaryService } from './group-page/group-summary/group-summary.service';
import { ExcelService } from './shared/excel.service';
import { DatePipe } from '@angular/common';
import { KpiCategoryService } from './common/kpi-category/kpi-category.service';
import { KpiSingleListService } from './common/kpi-single-list/kpi-single-list.service';
import { PhysicianSingleListService } from './common/physician-single-list/physician-single-list.service';
import { PhysicianScoreOvertimeService } from './common/physician-score-overtime/physician-score-overtime.service';
import { PatientKPIListComponent } from './common/patientKPIList/patientKPIList.component';
import { PhysicianCompareService } from './common/physician-compare/physician-compare.service';
import { PhysicianCompareComponent } from './common/physician-compare/physician-compare.component';
import { DoctorsCornerComponent } from './doctors-corner/doctors-corner.component';
import {DoctorsCornerService} from './doctors-corner/doctors-corner.service';
import { KpicategorydcComponent } from './doctors-corner/kpicategorydc/kpicategorydc.component';
import { KpicategorydcService } from './doctors-corner/kpicategorydc/kpicategorydc.service';


@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbComponent,
    PageNotFoundComponent,
    HomeComponent,
    AccessDeniedComponent,
    MessageComponent,
    DoctorsCornerComponent,
    KpicategorydcComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SidebarModule,
    EntitySearchModule,
    BrowserAnimationsModule,
    RouterModule,
    MatTabsModule,
    ErrorPageModule,
    HttpModule,
    SharedModule,
    SentenceBuilderModule,
    // NgProgressModule,
    PhysicianSummaryModule,
    GroupPageModule,
    WaitModalModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WaitModalInterceptor, multi: true },
    AuthGuard,
    BreadcrumbService,
    CookieService,
    UserInfoService,
    SentenceBuilderNotifyService,
    HomeService,
    ModalService,
    SharedService,
    PhysicianSummaryService,
    PatientSummaryViewService,
    PatientDetailsViewService,
    KPIHeatMapViewService,
    KpiCategoryService,
    KpiSingleListService,
    GroupSummaryService,
    PhysicianSingleListService,
    PhysicianScoreOvertimeService,
    ExcelService,
    DatePipe,
    PhysicianCompareService,
    DoctorsCornerService,
    KpicategorydcService
  ],
  entryComponents: [
    PatientKPIListComponent,
    PhysicianCompareComponent
  ],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }

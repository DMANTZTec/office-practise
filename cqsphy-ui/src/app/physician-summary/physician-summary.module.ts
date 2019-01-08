import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { PhysicianSummaryComponent } from './physician-summary.component';
import { TabsComponent } from './tabs/tabs.component';
import { PatientSummaryViewComponent } from './patient-summary-view/patient-summary-view.component';
import { PatientDetailsViewComponent } from './patient-details-view/patient-details-view.component';
import { KpiHeatmapViewComponent } from './kpi-heatmap-view/kpi-heatmap-view.component';
import { SharedModule } from '../shared/shared.module';
import {LineChartModule,
  EntitySearchModule, ErrorPageModule, SentenceBuilderModule,
  SentenceBuilderNotifyService, SidebarModule
} from 'bi-component-library';
import { GroupSummaryViewComponent } from './group-summary-view/group-summary-view.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LineChartModule,
    SentenceBuilderModule
  ],
  declarations: [
    PhysicianSummaryComponent,
    TabsComponent,
    PatientSummaryViewComponent,
    PatientDetailsViewComponent,
    KpiHeatmapViewComponent,
    GroupSummaryViewComponent
  ]
})
export class PhysicianSummaryModule { }

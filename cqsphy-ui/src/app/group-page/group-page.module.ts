import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupSummaryComponent } from './group-summary/group-summary.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  LineChartModule,
  EntitySearchModule, ErrorPageModule, SentenceBuilderModule,
  SentenceBuilderNotifyService, SidebarModule
} from 'bi-component-library';
import { GroupPageComponent } from './group-page.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LineChartModule,
    SentenceBuilderModule
  ],
  declarations: [
    GroupPageComponent,
    TabsComponent,
    GroupSummaryComponent,
    HeatmapComponent,
    PatientDetailsComponent]
})
export class GroupPageModule { }

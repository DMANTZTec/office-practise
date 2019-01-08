import { SentenceBuilderNotifyService, SentenceBuilderModule, LineChartModule, SparklineChartModule } from 'bi-component-library';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { HeatMapTableComponent } from '../common/heatMapTable/heatMapTable.component';
import { PatientListComponent } from '../common/patientList/patientList.component';
import { PatientKPIListComponent } from '../common/patientKPIList/patientKPIList.component';
import { PatientMetricRowComponent } from '../common/patientMetricRow/patientMetricRow.component';
import { PatientKPIInfoLegendComponent } from '../common/patientKPIInfoLegend/patientKPIInfoLegend.component';
import { PatientKPIInfoDetailsComponent } from '../common/patientKPIInfoDetails/patientKPIInfoDetails.component';
import { ChartValuesComponent } from '../common/chartValues/chartValues.component';
import { KpiCategoryComponent } from '../common/kpi-category/kpi-category.component';
import { KpiTileComponent } from '../common/kpi-tile/kpi-tile.component';
import { KpiSingleListComponent } from '../common/kpi-single-list/kpi-single-list.component';
import { SummaryComponent } from '../common/summary/summary.component';
import { PhysicianSingleListComponent } from '../common/physician-single-list/physician-single-list.component';
import { PhysicianTileComponent } from '../common/physician-tile/physician-tile.component';
import { PhysicianScoreOvertimeComponent } from '../common/physician-score-overtime/physician-score-overtime.component';
import { PhysicianCompareComponent } from '../common/physician-compare/physician-compare.component';

@NgModule({
    imports: [
        CommonModule,
        SentenceBuilderModule,
        LineChartModule,
        SparklineChartModule
    ],
    declarations: [
        ModalComponent,
        HeatMapTableComponent,
        PatientListComponent,
        PatientKPIListComponent,
        PatientMetricRowComponent,
        PatientKPIInfoLegendComponent,
        PatientKPIInfoDetailsComponent,
        ChartValuesComponent,
        KpiCategoryComponent,
        KpiTileComponent,
        KpiSingleListComponent,
        SummaryComponent,
        PhysicianSingleListComponent,
        PhysicianTileComponent,
        PhysicianScoreOvertimeComponent,
        PhysicianCompareComponent
    ],
    exports: [
        CommonModule,
        ModalComponent,
        SparklineChartModule,
        HeatMapTableComponent,
        PatientListComponent,
        PatientKPIListComponent,
        PatientMetricRowComponent,
        PatientKPIInfoLegendComponent,
        PatientKPIInfoDetailsComponent,
        ChartValuesComponent,
        KpiCategoryComponent,
        KpiTileComponent,
        KpiSingleListComponent,
        SummaryComponent,
        PhysicianSingleListComponent,
        PhysicianTileComponent,
        PhysicianScoreOvertimeComponent,
        PhysicianCompareComponent
    ],
    providers: [
        PatientKPIListComponent,
        HeatMapTableComponent,
        PatientListComponent,
        PatientMetricRowComponent,
        PatientKPIInfoLegendComponent,
        PatientKPIInfoDetailsComponent,
        ChartValuesComponent,
        KpiCategoryComponent,
        KpiTileComponent,
        KpiSingleListComponent,
        SummaryComponent,
        PhysicianSingleListComponent,
        PhysicianTileComponent,
        PhysicianScoreOvertimeComponent,
        PhysicianCompareComponent
    ]
})
export class SharedModule { }

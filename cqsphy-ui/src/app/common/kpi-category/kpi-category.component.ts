import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { KPICategoryData, KPIDetailsData, MetricRankResults } from '../../data/model';
import { LineChartModule, LineChartOptions, YAxisDataOptions, XAxisDataType, Marker } from 'bi-component-library';
import { KpiCategoryService, KpiCategorySvcParams } from './kpi-category.service';
import * as $ from 'jquery';
import { BreadcrumbService } from '../../bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-kpi-category',
  templateUrl: './kpi-category.component.html',
  styleUrls: ['./kpi-category.component.css']
})
export class KpiCategoryComponent implements OnInit, OnChanges {
  @Input() showView: number;
  @Input() modality: string;
  @Input() sort: number;
  kPICategoryData: KPICategoryData[];
  kPIDetailsData: KPIDetailsData[];

  // dummy variable, change in the value will force the Line chart to refresh
  // to do: research more on the angular change detection for complex objects so that we can get rid of this logic.
  updateLineChart: boolean;

  private _entityId;
  private _entityLvl;
  private _rptDt;
  private _dataAsOf: string;

  constructor(private _kpiCategoryServiceSvc: KpiCategoryService,
    private breadCrumbService: BreadcrumbService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      // this._entityId = this.breadCrumbService.get('entityId');
      // this._entityLvl = this.breadCrumbService.get('hierarchylevel');
      // console.log(this.breadCrumbService.get('entityId'));
      // console.log(this.breadCrumbService.get('hierarchylevel'));
      // console.log(this.breadCrumbService.get('pracGrpId'));
      // console.log(this.breadCrumbService.get('pracGrpLevel'));

      this._entityId = this.breadCrumbService.get('entityId') ? this.breadCrumbService.get('entityId') : this.breadCrumbService.get('pracGrpId');
      this._entityLvl = this.breadCrumbService.get('hierarchylevel') ? this.breadCrumbService.get('hierarchylevel') : this.breadCrumbService.get('pracGrpLevel');
      this._rptDt = this.breadCrumbService.get('dataAsOfDate');
      this._dataAsOf = this.breadCrumbService.get('dataAsOfDate');
      this.getDatafromSrv();
    }

  }

  getDatafromSrv() {
    const inputParams = new KpiCategorySvcParams();
    inputParams.entityId = this._entityId;
    inputParams.entityLvl = this._entityLvl;
    inputParams.modality = this.modality;
    inputParams.rptDt = this._rptDt;
    inputParams.display = this.showView;
    inputParams.sortBy = this.sort;

    this._kpiCategoryServiceSvc.getKPICategoryData(inputParams).subscribe(
      data => {
        if (data && data.length > 0) {
          this.kPICategoryData = <KPICategoryData[]>data;
        }
      },
      error => console.error(error)
    );

    this._kpiCategoryServiceSvc.getKPIDetailsData(inputParams).subscribe(
      data => {
        if (data && data.length > 0) {
          this.kPIDetailsData = <KPIDetailsData[]>data;
        }
      },
      error => console.error(error)
    );

  }

  categoryClick(kPICategoryDataRecord: KPICategoryData, event, row) {

    const myClass = $('#icon-collapse-' + kPICategoryDataRecord.metricCategoryOrder).attr('class');
    if (myClass.includes('fa-plus-square')) {
      $('#icon-collapse-' + kPICategoryDataRecord.metricCategoryOrder).removeClass('fa-plus-square').addClass('fa-minus-square');
    } else {
      $('#icon-collapse-' + kPICategoryDataRecord.metricCategoryOrder).removeClass('fa-minus-square').addClass('fa-plus-square');
    }
  }

  getCategoryRows(metricCategory: string): number[] {

    const rows: number[] = [];
    const rowCategory: KPIDetailsData[] = this.kPIDetailsData.filter(f => f.metricRankResults.metricCategory === metricCategory);
    rowCategory.forEach(element => {
      if ($.inArray(element.metricRankResults.rn, rows) === -1) {
        rows.push(element.metricRankResults.rn);
      }
    });
    return rows.sort((a, b) => a - b);
  }

  getCategoryKPIColumns(metricCategory: string, rowNumber: number) {

    return this.kPIDetailsData.filter(f => f.metricRankResults.metricCategory === metricCategory && f.metricRankResults.rn === rowNumber);
  }

}

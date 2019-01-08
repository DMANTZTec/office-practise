

import { Component, OnInit,Input } from '@angular/core';
import { KPICategoryData, KPIDetailsData } from '../../data/model';
import { LineChartModule, LineChartOptions, YAxisDataOptions, XAxisDataType, Marker } from 'bi-component-library';
import { KpicategorydcService, KpiCategoryDcSvcParams } from './kpicategorydc.service';
import * as $ from 'jquery';
import { debug } from 'util';
import { BreadcrumbService } from '../../bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-kpicategorydc',
  templateUrl: './kpicategorydc.component.html',
  styleUrls: ['./kpicategorydc.component.css']
})
export class KpicategorydcComponent implements OnInit {

  @Input() update: boolean;
  kPICategoryData: KPICategoryData[] = [];
  kPIDetailsData: KPIDetailsData[] = [];
  currentMonthKPIDetailsData: KPIDetailsData[] = [];
 kpiLineChartOptions: LineChartOptions = new LineChartOptions();
  kPITrendData: KPIDetailsData[] = [];

  // dummy variable, change in the value will force the Line chart to refresh
  // to do: research more on the angular change detection for complex objects so that we can get rid of this logic.
  updateLineChart: boolean;

  private _entityId;
  private _entityLvl;
  private _modality;
  private _rptDt;
  private _dataAsOf: string;

  constructor(private _kpiCategorydcServiceSvc: KpicategorydcService,
    private breadCrumbService: BreadcrumbService) { }

  ngOnInit() {
    this._entityId = this.breadCrumbService.get('entityId');//1003810938;
    this._entityLvl = this.breadCrumbService.get('hierarchylevel');//0;
    this._modality = this.breadCrumbService.get('modality');//'IHD';
    this._rptDt = this.breadCrumbService.get('dataAsOfDate');
    this._dataAsOf = this.breadCrumbService.get('dataAsOfDate');
    console.log(this._entityId);
    console.log(this._entityLvl);
    console.log(this._modality);
    console.log(this._rptDt);
    
    this.getDatafromSrv();
  }

  getDatafromSrv() {

    const inputParams = new KpiCategoryDcSvcParams();
   inputParams.entityId = this._entityId;
     //inputParams.entityId = 1013193150;
   inputParams.entityLvl = this._entityLvl;
     // inputParams.entityLvl = 0;
     // inputParams.modality = 'IHD';
    inputParams.modality = this._modality;
    inputParams.rptDt = '10/31/2018';
    //   inputParams.rptDt = this._rptDt;
    console.log(inputParams.entityId);
    console.log(inputParams.entityLvl);
    console.log(inputParams.modality);
    console.log(inputParams.rptDt);

    this._kpiCategorydcServiceSvc.getKPICategoryDcData(inputParams).subscribe(
      data => {
        if (data && data.length > 0) {
          console.log('got kpi category data ',data);
          this.kPICategoryData = <KPICategoryData[]>data;
        }
      },
      error => console.error(error)
    );

   /* this._kpiCategoryServiceSvc.getKPIDetailsData(inputParams).subscribe(
      data => {
        if (data && data.length > 0) {
          console.log(data);
          this.kPIDetailsData = <KPIDetailsData[]>data;
          this.setCurrentMonthKPIDetailsRecord();
        }
      },
      error => console.error(error)
    );*/

  }

  /*categoryClick(kPICategoryDataRecord: KPICategoryData, event, row) {

    const myClass = $('#icon-collapse-' + kPICategoryDataRecord.metricCategoryOrder).attr('class');
    if (myClass.includes('fa-plus-square')) {
      $('#icon-collapse-' + kPICategoryDataRecord.metricCategoryOrder).removeClass('fa-plus-square').addClass('fa-minus-square');
    } else {
      $('#icon-collapse-' + kPICategoryDataRecord.metricCategoryOrder).removeClass('fa-minus-square').addClass('fa-plus-square');
    }
  }*/

  /*setCurrentMonthKPIDetailsRecord() {
    if (this.kPIDetailsData
      .filter(f => f.postDate === this._dataAsOf).length > 0) {
      this.currentMonthKPIDetailsData = this.kPIDetailsData
        .filter(f => f.postDate === this._dataAsOf);
    }
    // console.log('this.currentMonthKPIDetailsData', JSON.stringify(this.currentMonthKPIDetailsData))
  }*/

 /* getCategoryRows(categoryName: string): number[] {
    const rows: number[] = [];

    const rowCategory: KPIDetailsData[] = this.currentMonthKPIDetailsData.filter(f => f.categoryName === categoryName);
    rowCategory.forEach(element => {
      // console.log(element)
      if ($.inArray(element.rowNumber, rows) === -1) {
        rows.push(element.rowNumber);
      }
    });
    // console.log(rows);
    return rows.sort((a, b) => a - b);
  }*/

  /*getCategoryKPIColumns(categoryName: string, rowNumber: number) {
    // console.log(this.currentMonthKPIDetailsData.filter(f => f.categoryName === categoryName && f.rowNumber === rowNumber))
    return this.currentMonthKPIDetailsData.filter(f => f.categoryName === categoryName && f.rowNumber === rowNumber);
  }*/

}

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { KPIDetailsData } from '../../data/model';
import { LineChartOptions } from 'bi-component-library';
import { KpiSingleListService, KpiSingleListSvcParams } from './kpi-single-list.service';
import * as $ from 'jquery';
import { debug } from 'util';
import { BreadcrumbService } from '../../bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-kpi-single-list',
  templateUrl: './kpi-single-list.component.html',
  styleUrls: ['./kpi-single-list.component.css']
})
export class KpiSingleListComponent implements OnInit, OnChanges {
  @Input() showView: number;
  @Input() modality: string;
  @Input() sort: number;
  @Input() update: boolean;
  kPIDetailsData: KPIDetailsData[];

  // dummy variable, change in the value will force the Line chart to refresh
  // to do: research more on the angular change detection for complex objects so that we can get rid of this logic.
  updateLineChart: boolean;

  private _entityId;
  private _entityLvl;
  private _rptDt;
  private _dataAsOf: string;

  constructor(private _kpiSingleListServiceSvc: KpiSingleListService,
    private breadCrumbService: BreadcrumbService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      // this._entityId = this.breadCrumbService.get('entityId');
      // this._entityLvl = this.breadCrumbService.get('hierarchylevel');

      this._entityId = this.breadCrumbService.get('entityId') ? this.breadCrumbService.get('entityId') : this.breadCrumbService.get('pracGrpId');
      this._entityLvl = this.breadCrumbService.get('hierarchylevel') ? this.breadCrumbService.get('hierarchylevel') : this.breadCrumbService.get('pracGrpLevel');

      this._rptDt = this.breadCrumbService.get('dataAsOfDate');
      this._dataAsOf = this.breadCrumbService.get('dataAsOfDate');
      this.getDatafromSrv();
    }

  }

  getDatafromSrv() {
    const inputParams = new KpiSingleListSvcParams();
    inputParams.entityId = this._entityId;
    inputParams.entityLvl = this._entityLvl;
    inputParams.modality = this.modality;
    inputParams.rptDt = this._rptDt;
    inputParams.display = this.showView;
    inputParams.sortBy = this.sort;

    this._kpiSingleListServiceSvc.getKPIDetailsData(inputParams).subscribe(
      data => {
        if (data && data.length > 0) {
          this.kPIDetailsData = <KPIDetailsData[]>data;
        }
      },
      error => console.error(error)
    );

  }

  getKPIRows(): number[] {
    const rows: number[] = [];
    this.kPIDetailsData.forEach(element => {
      if ($.inArray(element.metricRankResults.rn, rows) === -1) {
        rows.push(element.metricRankResults.rn);
      }
    });
    return rows.sort((a, b) => a - b);
  }

  getKPIColumns(rowNumber: number) {
    return this.kPIDetailsData.filter(f => f.metricRankResults.rn === rowNumber);
  }

}

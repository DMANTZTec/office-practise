
import { Component, Input, OnInit } from '@angular/core';
import { KPIHeatMapDetail } from '../../data/model';
import { KPIHeatMapViewService } from '../../physician-summary/kpi-heatmap-view/kpi-heatmap-view.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-heatMapTable',
  templateUrl: './heatMapTable.component.html',
  styleUrls: ['./heatMapTable.component.css'],
})
export class HeatMapTableComponent implements OnInit {
  kPIHeatMapDetailList: KPIHeatMapDetail[] = [];
  constructor(
    private _KPIHeatMapViewService: KPIHeatMapViewService,
  ) { }

  ngOnInit() {
    this.getDataFromSrv();
  }

  getDataFromSrv() {
    this._KPIHeatMapViewService.getPatientKPIHeatMap()
      .subscribe(
        data => {
          this.kPIHeatMapDetailList = <KPIHeatMapDetail[]>data;
          console.log(
            'this.kPIHeatMapDetailList',
            this.kPIHeatMapDetailList
          );
          // this._dataAsOf = this._breadCrumbService.get('dataAsOfDate');

          console.log('KPI Heat Map Detail List', this.kPIHeatMapDetailList);

          // const dataAsOfPostDt = this._dataAsOf.replace(this._dataAsOf.substr(this._dataAsOf.indexOf('/'), 3), '/01');
          // if (this.patientList.filter(f => f.metricDt === this._dataAsOf).length > 0) {
          //   this.monitoringViewDataArray = this.patientList.filter(
          //     f => f.postDate === dataAsOfPostDt);
          // }
        },
        error => console.error(error)
      );
  }
}


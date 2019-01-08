import { Component, OnInit } from '@angular/core';
import { KPIHeatMapViewService } from './kpi-heatmap-view.service';
import { KPIHeatMapDetail } from '../../data/model';

@Component({
  selector: 'app-kpi-heatmap-view',
  templateUrl: './kpi-heatmap-view.component.html',
  styleUrls: ['./kpi-heatmap-view.component.css']
})
export class KpiHeatmapViewComponent implements OnInit {
  kPIHeatMapDetailList: KPIHeatMapDetail[] = [];
  constructor(
    private _KPIHeatMapViewService: KPIHeatMapViewService,
  ) { }

  ngOnInit() {
    this.getDataFromSrv();
  }

  getDataFromSrv() {
    // debugger;
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

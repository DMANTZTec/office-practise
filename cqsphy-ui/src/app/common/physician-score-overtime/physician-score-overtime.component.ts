import { Component, OnInit } from '@angular/core';
import { PhysicianDetailsData, KPIHeatMapDetail, OvertimeMonthLabels } from '../../data/model';
import { LineChartOptions } from 'bi-component-library';
import { PhysicianScoreOvertimeService, PhysicianScoreOvertimeSvcParams } from './physician-score-overtime.service';

@Component({
  selector: 'app-physician-score-overtime',
  templateUrl: './physician-score-overtime.component.html',
  styleUrls: ['./physician-score-overtime.component.css']
})

export class PhysicianScoreOvertimeComponent implements OnInit {

  phyCQSScoreData: KPIHeatMapDetail[];
  monthLabelsData: OvertimeMonthLabels;
  modality: string;

  constructor(private _physicianScoreOvertimeServiceSvc: PhysicianScoreOvertimeService) { }

  ngOnInit() {
    this.modality = 'IHD';
    this.getDatafromSrv();
  }

  getDatafromSrv() {

    console.log('calling getDatafromSrv to get Physician CQS Scores Overtime data....');
    const inputParams = new PhysicianScoreOvertimeSvcParams();
    inputParams.modality = this.modality;

    this._physicianScoreOvertimeServiceSvc.getPhyCQSScoreData(inputParams).subscribe(
      data => {
        // debugger;
        if (data && data.length > 0) {
          this.phyCQSScoreData = <KPIHeatMapDetail[]>data;
        }
      },
      error => console.error(error)
    );

    this._physicianScoreOvertimeServiceSvc.getOvertimeMonthLabels(inputParams).subscribe(
      data => {
        // debugger;
        if (data) {
          this.monthLabelsData = <OvertimeMonthLabels>data;
          console.log(this.monthLabelsData);
        }
      },
      error => console.error(error)
    );

  }

}

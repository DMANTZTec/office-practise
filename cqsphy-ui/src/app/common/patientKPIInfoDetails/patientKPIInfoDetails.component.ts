
import { Component, Input, OnInit } from '@angular/core';
import { PatientMetric } from '../../data/model';

@Component({
  selector: 'app-patientKPInfoDetails',
  templateUrl: './patientKPIInfoDetails.component.html',
  styleUrls: ['./patientKPIInfoDetails.component.css'],
})
export class PatientKPIInfoDetailsComponent implements OnInit {
  @Input() patientMetricFromDB: PatientMetric[] = [];
  @Input() patientMetricRow: PatientMetric;
  @Input() patientMetricList: PatientMetric[] = [];

  childKPIList: PatientMetric[] = [];
  parentKPIList: PatientMetric[] = [];

  constructor() {
  }
  ngOnInit() {
    this.childKPIList = this.patientMetricFromDB.filter(f => f.isParent === 'FALSE'
      && f.metricDt === '08/15/2018'
      && f.metricCd === this.patientMetricRow.metricCd);
    this.parentKPIList = this.patientMetricFromDB.filter(f => f.isParent === 'TRUE'
      && f.metricDt === '08/15/2018'
      && f.metricCd === this.patientMetricRow.metricCd);
  }
}

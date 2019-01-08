
import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { PatientMetric } from '../../data/model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-patientMetricRow',
  templateUrl: './patientMetricRow.component.html',
  styleUrls: ['./patientMetricRow.component.css'],
})
export class PatientMetricRowComponent implements OnInit {
  @Input() MRN: string;
  @Input() patientMetricFromDB: PatientMetric[] = [];
  // @Input() parentKPI: any;
  // @Input() patientMetricList: PatientMetric[] = [];
  @Input() metricID: string;
  patientMetricRow: PatientMetric;

  // parentKPI: any;
  patientMetricList: PatientMetric[] = [];

  constructor() { }

  ngOnInit() {
    this.patientMetricList = this.patientMetricFromDB.filter(f => f.metricCd === this.metricID);
    if (this.patientMetricList.length > 0) {
      this.patientMetricRow = this.patientMetricList[0];
    }
  }

  kpiClick(patientMetricRow: PatientMetric, event, row) {
    // debugger;
    const myClass = $('#kpi-toggle-icon-' + patientMetricRow.MRN + '-' + patientMetricRow.metricCd).attr('class');
    if (myClass === 'icon fa fa-chevron-right fa-2x') {
      $('#kpi-toggle-icon-' + patientMetricRow.MRN + '-' + patientMetricRow.metricCd)
        .removeClass('icon fa fa-chevron-right fa-2x')
        .addClass('icon fa fa-chevron-down fa-2x');
    } else {
      $('#kpi-toggle-icon-' + patientMetricRow.MRN + '-' + patientMetricRow.metricCd)
        .removeClass('icon fa fa-chevron-down fa-2x')
        .addClass('icon fa fa-chevron-right fa-2x');
    }
  }

}

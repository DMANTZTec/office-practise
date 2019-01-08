
import { Component, Input, OnInit } from '@angular/core';
import { PatientMetric } from '../../data/model';

@Component({
  selector: 'app-patientKPIInfoLegend',
  templateUrl: './patientKPIInfoLegend.component.html',
  styleUrls: ['./patientKPIInfoLegend.component.css'],
})
export class PatientKPIInfoLegendComponent implements OnInit {
  @Input() patientMetricRow: PatientMetric;
  constructor() {

  }
  ngOnInit() {
  }
}

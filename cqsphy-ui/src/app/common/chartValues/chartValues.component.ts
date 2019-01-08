import {
  Component, OnInit, Input, Output, EventEmitter, ViewChild, Directive, DoCheck,
  KeyValueDiffer, KeyValueDiffers, Renderer, ChangeDetectionStrategy
} from '@angular/core';
import { LineChartModule, LineChartOptions, YAxisDataOptions, XAxisDataType, Marker } from 'bi-component-library';
import { PatientMetric } from '../../data/model';
@Component({
  selector: 'app-chartValues',
  templateUrl: './chartValues.component.html',
  styleUrls: ['./chartValues.component.css']
})

export class ChartValuesComponent implements OnInit {
  @Input() patientMetricList: PatientMetric[] = [];
  @Input() subMetricId: string;
  chartValues: PatientMetric[] = [];
  lineChartOptions = new LineChartOptions();
  companyOptions = new YAxisDataOptions();
  ngOnInit() {
    debugger;
    this.setLineChartOptions();
    this.chartValues = this.patientMetricList.filter(f => f.subMetricId === this.subMetricId);
    console.log('this.chartValues', this.chartValues);
  }

  setLineChartOptions() {
    // common line chart options
    this.lineChartOptions.height = 150;
    this.lineChartOptions.width = 600;
    this.lineChartOptions.margin.left = 30;
    this.lineChartOptions.margin.bottom = 5;
    this.lineChartOptions.margin.right = 55;
    this.lineChartOptions.margin.top = 5;
    this.lineChartOptions.xAxis.class = '';
    this.lineChartOptions.xAxis.format = '%m/%d/%Y';
    this.lineChartOptions.xAxis.data.column = 'metricDt';
    this.lineChartOptions.xAxis.data.class = '';
    this.lineChartOptions.xAxis.data.type = XAxisDataType.DateTime;
    this.lineChartOptions.xAxis.data.dateTimeFormat = '%m/%d/%Y';
    this.lineChartOptions.yAxis.class = '';
    this.lineChartOptions.yAxis.format = '';
    this.lineChartOptions.yAxis.prefix = '';
    this.lineChartOptions.yAxis.suffix = '%';
    this.lineChartOptions.yAxis.marker = Marker.square;
    this.lineChartOptions.yAxis.markerSize = 50;
    // this.lineChartOptions.yAxis.title = '% Patients';

    // metric value line chart options
    const metricValueSeries = new YAxisDataOptions();
    metricValueSeries.column = 'targetMonthValue';
    // metricValueSeries.showValues = true;
    metricValueSeries.tooltip.content = `$targetMonthValue`;
    this.lineChartOptions.yAxis.data.push(metricValueSeries);
  }
}

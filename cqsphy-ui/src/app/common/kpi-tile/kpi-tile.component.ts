import { Component, OnInit, Input } from '@angular/core';
import { KPIDetailsData, MetricRankResults, MetricKpiTrends } from '../../data/model';
import { LineChartModule, LineChartOptions, YAxisDataOptions, XAxisDataType, Marker } from 'bi-component-library';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-kpi-tile',
  templateUrl: './kpi-tile.component.html',
  styleUrls: ['./kpi-tile.component.css']
})

export class KpiTileComponent implements OnInit {
  @Input() currentMonthRecord: MetricRankResults;
  @Input() trendData: MetricKpiTrends[];
  lineChartOptions: LineChartOptions = new LineChartOptions();
  fkcRateOptions = new YAxisDataOptions();
  currentMonthTrendRecord: MetricKpiTrends;

  // dummy variable, change in the value will force the Line chart to refresh
  // to do: research more on the angular change detection for complex objects so that we can get rid of this logic.
  updateLineChart: boolean;

  constructor() { }

  ngOnInit() {
    this.currentMonthTrendRecord = this.trendData.filter(f => f.postDate === this.currentMonthRecord.postDate &&
      f.metricId === this.currentMonthRecord.metricId)[0];
    this.setLineChartOptions();
  }

  setLineChartOptions() {

    // common line chart options
    this.lineChartOptions.height = 100;
    this.lineChartOptions.width = 150;
    this.lineChartOptions.margin.left = 5;
    this.lineChartOptions.margin.bottom = 5;
    this.lineChartOptions.margin.right = 5;
    this.lineChartOptions.margin.top = 5;
    this.lineChartOptions.xAxis.class = '#4EA8C4';
    this.lineChartOptions.xAxis.format = '%m/%d/%Y';
    this.lineChartOptions.xAxis.data.column = 'postDate1';
    this.lineChartOptions.xAxis.data.class = '';
    this.lineChartOptions.xAxis.data.type = XAxisDataType.DateTime;
    this.lineChartOptions.xAxis.data.dateTimeFormat = '%m/%d/%Y';
    this.lineChartOptions.yAxis.class = '#4EA8C4';
    this.lineChartOptions.yAxis.format = '';
    this.lineChartOptions.yAxis.prefix = '';
    this.lineChartOptions.yAxis.suffix = '%';
    this.lineChartOptions.yAxis.marker = Marker.none;
    this.lineChartOptions.yAxis.markerSize = 0;
    this.lineChartOptions.yAxis.title = '';

    // kpiRate value line chart options
    const kpiRateSeries = new YAxisDataOptions();
    kpiRateSeries.column = 'entityMetricValue';
    this.lineChartOptions.yAxis.data.push(kpiRateSeries);

    // company values line chart options
    this.fkcRateOptions.column = 'fkcScore';
    this.lineChartOptions.yAxis.data.push(this.fkcRateOptions);

  }

}

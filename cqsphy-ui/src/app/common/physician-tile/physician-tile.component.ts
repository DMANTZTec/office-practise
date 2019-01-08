import { Component, OnInit, Input } from '@angular/core';
import { LineChartModule, LineChartOptions, YAxisDataOptions, XAxisDataType, Marker } from 'bi-component-library';
import { PhysicianDetailsData } from '../../data/model';

@Component({
  selector: 'app-physician-tile',
  templateUrl: './physician-tile.component.html',
  styleUrls: ['./physician-tile.component.css']
})

export class PhysicianTileComponent implements OnInit {
  @Input() currentMonthRecord: PhysicianDetailsData;
  @Input() trendData: PhysicianDetailsData[];
  lineChartOptions: LineChartOptions = new LineChartOptions();

  // dummy variable, change in the value will force the Line chart to refresh
  // to do: research more on the angular change detection for complex objects so that we can get rid of this logic.
  updateLineChart: boolean;

  constructor() { }

  ngOnInit() {
    this.trendData = this.trendData.filter(f => f.outputEntityId === this.currentMonthRecord.outputEntityId);
    // console.log(this.trendData);
    this.setLineChartOptions();
  }

  setLineChartOptions() {
    // common line chart options
    this.lineChartOptions.height = 100;
    this.lineChartOptions.width = 200;
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
    this.lineChartOptions.yAxis.marker = Marker.circle;
    this.lineChartOptions.yAxis.markerSize = 10;
    this.lineChartOptions.yAxis.title = '';

    // cqsScore value line chart options
    const cqsScoreSeries = new YAxisDataOptions();
    cqsScoreSeries.column = 'outCqsScore';
    cqsScoreSeries.tooltip.content = `CQS Score: $outCqsScore${this.lineChartOptions.yAxis.suffix}`;
    this.lineChartOptions.yAxis.data.push(cqsScoreSeries);
  }

}

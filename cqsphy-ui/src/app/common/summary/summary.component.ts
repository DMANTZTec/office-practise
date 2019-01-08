import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SummaryData } from '../../data/model';
import { LineChartModule, LineChartOptions, XAxisDataType, Marker, YAxisDataOptions } from 'bi-component-library';
import { BreadcrumbService } from '../../bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnChanges {
  // dummy variable, change in the value will force the Line chart to refresh
  // to do: research more on the angular change detection for complex objects so that we can get rid of this logic.
  updateLineChart: boolean;
  @Input() trendData: SummaryData[];
  @Input() set update(value: boolean) {
    this.updateLineChart = value;
  }
  @Input() moduleName: string;
  currentMonthData: SummaryData;
  lineChartOptions: LineChartOptions = new LineChartOptions();
  private _dataAsOf: string;


  constructor(private _breadCrumbService: BreadcrumbService) { }

  ngOnInit() {
    this._dataAsOf = this._breadCrumbService.get('dataAsOfDate');
    this.setCurrentMonthRecord();
    this.setLineChartOptions();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.update.firstChange) {
      this.setCurrentMonthRecord();
    }
  }

  setCurrentMonthRecord() {
    if (this.trendData.filter(f => f.postDate === this._dataAsOf).length > 0) {
      this.currentMonthData = this.trendData
        .filter(f => f.postDate === this._dataAsOf)[0];
      this._breadCrumbService.set('pracGrpId', this.currentMonthData.pracGrpId);
      this._breadCrumbService.set('pracGrpLevel', '1');
    }
    // console.log('this.currentMonthData', JSON.stringify(this.currentMonthData))
  }

  setLineChartOptions() {
    // common line chart options
    this.lineChartOptions.height = 150;
    this.lineChartOptions.width = 350;
    this.lineChartOptions.margin.left = 5;
    this.lineChartOptions.margin.bottom = 5;
    this.lineChartOptions.margin.right = 5;
    this.lineChartOptions.margin.top = 5;
    this.lineChartOptions.xAxis.class = '#4EA8C4';
    this.lineChartOptions.xAxis.format = '%m/%d/%Y';
    this.lineChartOptions.xAxis.data.column = 'postDate';
    this.lineChartOptions.xAxis.data.class = '';
    this.lineChartOptions.xAxis.data.type = XAxisDataType.DateTime;
    this.lineChartOptions.xAxis.data.dateTimeFormat = '%m/%d/%Y';
    this.lineChartOptions.yAxis.class = '#4EA8C4';
    this.lineChartOptions.yAxis.format = '';
    this.lineChartOptions.yAxis.prefix = '';
    this.lineChartOptions.yAxis.suffix = '%';
    this.lineChartOptions.yAxis.marker = Marker.circle;
    this.lineChartOptions.yAxis.markerSize = 25;
    this.lineChartOptions.yAxis.title = '';

    // cqsScore value line chart options
    const cqsScoreSeries = new YAxisDataOptions();
    cqsScoreSeries.column = 'entityCqsScores';
    cqsScoreSeries.tooltip.content = `Physician Score: $entityCqsScores${this.lineChartOptions.yAxis.suffix}`;
    this.lineChartOptions.yAxis.data.push(cqsScoreSeries);
  }

}

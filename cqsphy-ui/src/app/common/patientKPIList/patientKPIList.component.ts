import { Subscription } from 'rxjs/rx';
import { Component, Input, OnInit } from '@angular/core';
import { PatientMetric } from '../../data/model';
import { PatientDetailsViewService, PatientDetailsServiceParams, PatientMetricsServiceParams } from '../patientList/patientList.service';
import { BreadcrumbService } from '../../bread-crumb/bread-crumb.service';
import { SentenceBuilderNotifyService } from 'bi-component-library';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-patientKPIList',
  templateUrl: './patientKPIList.component.html',
  styleUrls: ['./patientKPIList.component.css'],
})
export class PatientKPIListComponent implements OnInit {
  parentKPIList = [];
  @Input() _selectedSentenceBuilderOptions: any;
  @Input() MRN: string;
  @Input() metIndicator: number;
  patientMetricRow: PatientMetric;
  patientMetricList: PatientMetric[];
  patientMetricListRows: PatientMetric[];
  private _subscription: Subscription;
  constructor(
    private _PatientDetailsViewService: PatientDetailsViewService,
    public breadCrumbService: BreadcrumbService,
    private _sentenceBuilderNotifyService: SentenceBuilderNotifyService
  ) {

  }
  ngOnInit() {
    // debugger;
    console.log(this.MRN);
    // this._subscription = this._sentenceBuilderNotifyService.notifyObservable.subscribe(
    //   (selectedSentenceBuilderOptions) => {
    //     debugger;
    //     console.log('selectedSentenceBuilderOptions', selectedSentenceBuilderOptions);
    //     this.getData(selectedSentenceBuilderOptions);
    //   });

    this.getData(this._selectedSentenceBuilderOptions);
  }

  getData(selectedSentenceBuilderOptions: any) {
    const entityId = this.breadCrumbService.get('entityId') ? this.breadCrumbService.get('entityId') : 1861422743;
    const _rptDt = this.breadCrumbService.get('dataAsOfDate');
    const inputParams = new PatientMetricsServiceParams();
    inputParams.metricIndicator = +this.metIndicator;
    inputParams.clinicId = selectedSentenceBuilderOptions.entity.id === '-1' ? 'null' : selectedSentenceBuilderOptions.entity.id;
    inputParams.modality = selectedSentenceBuilderOptions.modality.id;
    inputParams.patientId = this.MRN;
    inputParams.physicianId = entityId;
    inputParams.reportDate = _rptDt;
    this.getDataFromSrv(inputParams);
  }

  getDataFromSrv(inputParams: PatientMetricsServiceParams) {
    this._PatientDetailsViewService
      .getPatientMetric(inputParams)
      .subscribe(
        data => {
          this.patientMetricList = <PatientMetric[]>data;
          this.patientMetricListRows = this.patientMetricList;
          // .filter(f => f.metricDate === '03/01/2018'  && f.MRN === this.MRN);
          this.filterParentChild(this.patientMetricListRows, 'metricCd', 'metricName');
          // console.log('parentKPIListCheckThis', this.parentKPIList);
        },
        error => console.error(error)
      );
  }

  filterParentChild(arrayList, metricID, metricName) {
    // while (this.parentKPIList.length > 0) {
    //   this.parentKPIList.pop();
    // }
    // // this.parentKPIList = this.parentKPIList.splice(0, this.parentKPIList.length);
    // this.parentKPIList.length = 0;

    // console.log('parentKPIList from filterParentChild start', this.parentKPIList);

    let parentList = [];
    parentList = this.getUniqueValuesOfKey(arrayList, metricID);

    for (let i = 0; i < parentList.length; i++) {
      const filteredRows = arrayList.filter(
        f => {
          // console.log('parentList[i]', parentList[i]);
          return f[metricID] ===
            parentList[i];
        }
      );

      // console.log('filteredRows', filteredRows);
      this.addEntry(
        filteredRows[0][metricID],
        filteredRows[0][metricName],
        filteredRows
      );
    }
  }

  addEntry(id, name, value) {
    this.parentKPIList.push({ id }); // , name, value });
  }

  getUniqueValuesOfKey(array, key) {
    return array.reduce(function (unique, item) {
      // tslint:disable-next-line:no-bitwise
      if (item[key] && !~unique.indexOf(item[key])) {
        unique.push(item[key]);
      }
      return unique;
    }, []);
  }

}

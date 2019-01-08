import { Subscription } from 'rxjs/rx';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Patient, PatientMetric } from '../../data/model';
import * as $ from 'jquery';
import { SharedService } from '../../shared/shared.service';
import { ExcelService } from '../../shared/excel.service';
// tslint:disable-next-line:max-line-length
import { PatientDetailsViewService, PatientDetailsServiceParams } from './patientList.service';
import { PatientKPIListComponent } from '../patientKPIList/patientKPIList.component';
import { SentenceBuilderNotifyService } from 'bi-component-library';
import { BreadcrumbService } from '../../bread-crumb/bread-crumb.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-patientList',
  templateUrl: './patientList.component.html',
  styleUrls: ['./patientList.component.css'],
})
export class PatientListComponent implements OnInit, OnDestroy {
  @Input() screenName: string;
  patientList: Patient[] = [];
  patientMetricList: PatientMetric[] = [];
  patientMetricListRows: PatientMetric[] = [];
  parentKPIList = [];
  _selectedSentenceBuilderOptions: any;
  private _subscription: Subscription;
  constructor(
    private _PatientDetailsViewService: PatientDetailsViewService,
    private _modalService: SharedService,
    private _excelService: ExcelService,
    public breadCrumbService: BreadcrumbService,
    private _sentenceBuilderNotifyService: SentenceBuilderNotifyService
  ) { }

  ngOnInit() {
    console.log('Patient List Home Page');
    this._subscription = this._sentenceBuilderNotifyService.notifyObservable.subscribe(
      (selectedSentenceBuilderOptions) => {
        // debugger;
        console.log('selectedSentenceBuilderOptions', selectedSentenceBuilderOptions);
        this._selectedSentenceBuilderOptions = selectedSentenceBuilderOptions;
        this.getData(selectedSentenceBuilderOptions);
      });
  }

  ptListExportToExcel() {
    const data = [];
    this.patientList.forEach(d => {
      data.push(
        [d.dob, d.mrn, d.clinic, d.clinic, d.kpiNotMetCnt, d.isIncident, d.mrn,
        d.attendingPhysician, d.attendingPhysician, d.physiciansGroup]
      );
    }
    );
    this._excelService.generatePatientListExcel('PatientList', 'PatientList', null, data);
  }

  getData(selectedSentenceBuilderOptions: any) {
    // debugger;
    console.log('selectedSentenceBuilderOptions', selectedSentenceBuilderOptions);

    const entityId = this.breadCrumbService.get('entityId') ? this.breadCrumbService.get('entityId') : 10002517;

    const practiceGroupId = this.breadCrumbService.get('pracGrpId') ? this.breadCrumbService.get('pracGrpId') : 10002517;
    const _rptDt = this.breadCrumbService.get('dataAsOfDate');


    // display: { label: "all my patients", id: "1" }
    // entity: { label: "across all clinics", id: "-1" }
    // modality: { label: "IHD patients", id: "IHD" }
    // physician: { label: "all physicians", id: "-1" }
    // sort: { label: "worst to best", id: "1" }



    // 'clinic': +inputParams.clinicId,
    //   'entityLvl': inputParams.entityLvl,
    //     'entityType': 'physician',
    //       'metricDt': inputParams.reportDate,
    //         'modality': inputParams.modality,
    //           'patientType': +inputParams.patientType,
    //             'physId': +inputParams.physicianId,
    //               'practiceGroupId': +inputParams.groupId,
    //                 'sortOrder': inputParams.sort,

    const inputParams = new PatientDetailsServiceParams();
    // inputParams.clinicId = selectedSentenceBuilderOptions.entity.id === '-1' ? 'null' : selectedSentenceBuilderOptions.entity.id;
    inputParams.clinicId = selectedSentenceBuilderOptions.entity.id;
    inputParams.modality = selectedSentenceBuilderOptions.modality.id;
    inputParams.patientType = selectedSentenceBuilderOptions.display.id;
    inputParams.reportDate = _rptDt; // report date
    inputParams.entityType = this.screenName;
    inputParams.sort = selectedSentenceBuilderOptions.sort.id;


    if (this.screenName === 'Physician') {
      inputParams.physicianId = entityId;
      inputParams.groupId = '-1';
      inputParams.entityLvl = 0;

    } else {
      inputParams.groupId = practiceGroupId;
      inputParams.physicianId = '-1';
      inputParams.entityLvl = 1;
    }

    this.getDataFromSrv(inputParams);

  }

  getDataFromSrv(inputParams: PatientDetailsServiceParams) {
    this._PatientDetailsViewService
      .getPatient(inputParams)
      .subscribe(
        data => {
          // debugger;
          this.patientList = <Patient[]>data;
          console.log(
            'this.patientList',
            this.patientList
          );
          console.log('Patient List', this.patientList);
        },
        error => console.error(error)
      );
    // this.loadContent = 'true';
  }

  patientClick(patient: Patient, event, row) {
    const myClass = $('#icon-detail-toggle-' + patient.mrn).attr('class');
    if (myClass === 'fa fa-plus-square') {
      $('#icon-detail-toggle-' + patient.mrn).removeClass('fa-plus-square').addClass('fa-minus-square');
      const serviceData = {
        'MRN': patient.mrn.toString(),
        'parentEle': 'body-' + patient.mrn,
        '_selectedSentenceBuilderOptions': this._selectedSentenceBuilderOptions,
        'metIndicator': '0'
      };
      this._modalService.appendComponentToModal(PatientKPIListComponent, serviceData);
      // this._PatientDetailsViewService
      //   .getPatientMetric()
      //   .subscribe(
      //     data => {
      //       this.patientMetricList = <PatientMetric[]>data;
      //       console.log('this.patientList', this.patientMetricList);
      //       console.log('Patient List', this.patientMetricList);
      //       this.patientMetricListRows = this.patientMetricList.filter(f => f.metricDate === '03/01/2018'
      //         && f.MRN === patient.MRN);
      //       this.filterParentChild(this.patientMetricListRows, 'metricID', 'metricName');



      //     },
      //     error => console.error(error)
      //   );
      console.log($(event.target).attr('data-target'));
      console.log(row);
    } else {
      $('#icon-detail-toggle-' + patient.mrn).removeClass('fa-minus-square').addClass('fa-plus-square');
    }
  }


  loadMetricsAgain(patient: Patient, event, row) {
    // debugger;
    const myClass = $('#icon-detail-toggle-' + patient.mrn).attr('class');

    const lblText = $('#btn-' + patient.mrn).text();

    const metIndicator = lblText === 'Load Metrics That Met Target' ? 1 : 0;
    const updatedLabel = lblText === 'Load Metrics That Met Target' ? 'Load Metrics That Not Met Target' : 'Load Metrics That Met Target';
    $('#btn-' + patient.mrn).text(updatedLabel);

    console.log('lblText', lblText);
    if (myClass === 'fa fa-minus-square') {
      const serviceData = {
        'MRN': patient.mrn.toString(),
        'parentEle': 'body-' + patient.mrn,
        '_selectedSentenceBuilderOptions': this._selectedSentenceBuilderOptions,
        'metIndicator': 1
      };
      this._modalService.appendComponentToModal(PatientKPIListComponent, serviceData);
      // this._PatientDetailsViewService
      //   .getPatientMetric()
      //   .subscribe(
      //     data => {
      //       this.patientMetricList = <PatientMetric[]>data;
      //       console.log('this.patientList', this.patientMetricList);
      //       console.log('Patient List', this.patientMetricList);
      //       this.patientMetricListRows = this.patientMetricList.filter(f => f.metricDate === '03/01/2018'
      //         && f.MRN === patient.MRN);
      //       this.filterParentChild(this.patientMetricListRows, 'metricID', 'metricName');



      //     },
      //     error => console.error(error)
      //   );
      console.log($(event.target).attr('data-target'));
      console.log(row);
    }
  }

  filterParentChild(arrayList, metricID, metricName) {
    console.log('getUniqueValuesOfKey', JSON.stringify(this.getUniqueValuesOfKey(arrayList, metricID)));

    while (this.parentKPIList.length > 0) {
      this.parentKPIList.pop();
    }
    // this.parentKPIList = this.parentKPIList.splice(0, this.parentKPIList.length);
    this.parentKPIList.length = 0;

    console.log('parentKPIList from filterParentChild start', this.parentKPIList);

    let parentList = [];
    parentList = this.getUniqueValuesOfKey(arrayList, metricID);

    for (let i = 0; i < parentList.length; i++) {
      const filteredRows = arrayList.filter(
        f => {
          console.log('parentList[i]', parentList[i]);
          return f[metricID] ===
            parentList[i];
        }
      );

      console.log('filteredRows', filteredRows);
      this.addEntry(
        filteredRows[0][metricID],
        filteredRows[0][metricName],
        filteredRows
      );
    }
  }

  addEntry(id, name, value) {
    this.parentKPIList.push({ id, name, value });
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

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}

import { Component, OnInit, SimpleChanges, Input, OnChanges } from '@angular/core';
import { PhysicianDetailsData } from '../../data/model';
import { LineChartOptions } from 'bi-component-library';
import { PhysicianSingleListService, PhySingleListSvcParams } from './physician-single-list.service';
import * as $ from 'jquery';
import { debug } from 'util';
import { ModalService } from '../../modal/modal.service';
import { PhysicianCompareComponent } from '../physician-compare/physician-compare.component';
import { BreadcrumbService } from '../../bread-crumb/bread-crumb.service'

@Component({
  selector: 'app-physician-single-list',
  templateUrl: './physician-single-list.component.html',
  styleUrls: ['./physician-single-list.component.css']
})

export class PhysicianSingleListComponent implements OnInit, OnChanges {
  @Input() modality: string;
  @Input() sort: number;
  phyDetailsData: PhysicianDetailsData[];
  currentMonthPhyDetailsData: PhysicianDetailsData[];
  phyLineChartOptions: LineChartOptions = new LineChartOptions();

  private _entityId;
  private _entityLvl;
  private _rptDt;
  private _dataAsOf: string;

  constructor(private _physicianSingleListServiceSvc: PhysicianSingleListService,
    private _modalService: ModalService,
    private breadCrumbService: BreadcrumbService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this._entityId = this.breadCrumbService.get('pracGrpId');
      this._entityLvl = this.breadCrumbService.get('pracGrpLevel');
      this._rptDt = this.breadCrumbService.get('dataAsOfDate');
      this._dataAsOf = this.breadCrumbService.get('dataAsOfDate');
      this.getDatafromSrv();
    }
  }

  getDatafromSrv() {
    const inputParams = new PhySingleListSvcParams();
    inputParams.entityId = this._entityId;
    inputParams.entityLvl = this._entityLvl;
    inputParams.modality = this.modality;
    inputParams.rptDt = this._rptDt;
    inputParams.sortBy = this.sort;

    this._physicianSingleListServiceSvc.getPhyDetailsData(inputParams).subscribe(
      data => {
        if (data && data.length > 0) {
          this.phyDetailsData = <PhysicianDetailsData[]>data;
          this.setCurrentMonthPhyDetailsRecord();
        }
      },
      error => console.error(error)
    );
  }

  setCurrentMonthPhyDetailsRecord() {
    if (this.phyDetailsData
      .filter(f => f.postDate === this._dataAsOf).length > 0) {
      this.currentMonthPhyDetailsData = this.phyDetailsData
        .filter(f => f.postDate === this._dataAsOf);
    }
  }

  getPhyRows(): number[] {
    const rows: number[] = [];

    this.currentMonthPhyDetailsData.forEach(element => {
      if ($.inArray(element.rn, rows) === -1) {
        rows.push(element.rn);
      }
    });
    return rows.sort((a, b) => a - b);
  }

  getPhyColumns(rowNumber: number) {
    return this.currentMonthPhyDetailsData.filter(f => f.rn === rowNumber);
  }

  physicianCompare() {
    if ($('input[type=checkbox]:checked').length > 0) {
      $('#compare-btn-wrapper').fadeIn();
    } else {
      $('#compare-btn-wrapper').fadeOut();
    }
  }

  toPhysicianCompare() {
    let checkedPhys: string = '';
    let noOfPhys: number = 0;
    if ($('input[type=checkbox]:checked').length == 1) {

      // Please make at least 2 selections.
      alert("Please make at least 2 selections.");
    }
    else if ($('input[type=checkbox]:checked').length > 5) {
      // Please make no more than 5 selections.
      alert("Please make no more than 5 selections.");
    }
    else {
      const data = {
        checkedPhysList: null
      };
      $('input:checkbox[id^="comparechk"]:checked').each(function () {
        var sThisVal = $(this).val();
        checkedPhys += (checkedPhys == "" ? sThisVal : "," + sThisVal);
        noOfPhys++;
      });
      data.checkedPhysList = checkedPhys;
      this._modalService.appendComponentToModal(PhysicianCompareComponent, data);
    }
  }

}

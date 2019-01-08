import { Component, OnInit } from '@angular/core';
import { SummaryData } from '../../data/model';
import { GroupSummaryService, GroupSummarySvcParams } from './group-summary.service';
import { BreadcrumbService } from '../../bread-crumb/bread-crumb.service';
import { SentenceBuilderNotifyService } from 'bi-component-library';
import { Subscription } from 'rxjs/rx';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-group-summary',
  templateUrl: './group-summary.component.html',
  styleUrls: ['./group-summary.component.css']
})

export class GroupSummaryComponent implements OnInit {

  groupSummaryData: SummaryData[];
  sbConfig: any;
  showView = 1; //  1 - category;  0 - singleList; 2 - Phy in a Single list; 3 - CQS Scores OT
  private _entityId;
  private _entityLvl;
  modality: string;
  sort: number;
  private _rptDt;
  private _subscription: Subscription;
  updateChildren: boolean;

  constructor(private _groupSummaryViewSvc: GroupSummaryService,
    public breadCrumbService: BreadcrumbService,
    private _sentenceBuilderNotifyService: SentenceBuilderNotifyService
    ) {
  }

  ngOnInit() {
    // CHECK IF THE PRACTICE GROUP APPLICATION IS DIRECTLY COMING FROM DOCSTORS CORNER OR FROM THE PHYSICIAN GROUP SUMMARY
    this._entityId = this.getUrlParameter('pracGrpId') ? this.getUrlParameter('pracGrpId') : this.breadCrumbService.get('pracGrpId');
    this._entityLvl = this.getUrlParameter('pracGrpLevel') ? this.getUrlParameter('pracGrpLevel') : this.breadCrumbService.get('pracGrpLevel');
    this.modality = this.getUrlParameter('modality') ? this.getUrlParameter('modality') : this.breadCrumbService.get('modality');
    this._rptDt = this.breadCrumbService.get('dataAsOfDate');

    this.breadCrumbService.set('pracGrpId', this._entityId);
    this.breadCrumbService.set('pracGrpLevel', this._entityLvl);

    // console.log('from GroupSummaryComponent in Group Page Module:')
    // console.log(this._entityId + ' ' + this._entityLvl + ' ' + this.modality + ' ' + this._rptDt);
    // console.log(this.breadCrumbService.get('modality'));

    // if (this.breadCrumbService.check('modality')) {
    if (this.modality) {
      this.sbConfig = {
        applicationName: 'PHYCQS', viewName: 'GROUP_SUMMARY_PHY',
        initialOption: { sboS2: this.breadCrumbService.get('modality') + ' patients' }
      };
    } else {
      this.sbConfig = { applicationName: 'PHYCQS', viewName: 'GROUP_SUMMARY_PHY' };
    }

    this.getDatafromSrv();
    this._subscription = this._sentenceBuilderNotifyService.notifyObservable.subscribe(
      (selectedSentenceBuilderOptions) => {
        console.log("printing selectedSentenceBuilderOptions from Group Summary = ");
        console.log(selectedSentenceBuilderOptions);
        if (this.modality !== selectedSentenceBuilderOptions.modality.id) {
          this.modality = selectedSentenceBuilderOptions.modality.id;
          this.getDatafromSrv();
        }
        if (this.sort !== selectedSentenceBuilderOptions.sort.id) {
          this.sort = selectedSentenceBuilderOptions.sort.id;
        }
        if (this.showView !== selectedSentenceBuilderOptions.display.id) {
          this.showView = selectedSentenceBuilderOptions.display.id;
        }

      });
  }

  getDatafromSrv() {
    const inputParams = new GroupSummarySvcParams();
    inputParams.entityId = this._entityId;
    inputParams.entityLvl = this._entityLvl;
    inputParams.modality = this.modality;
    inputParams.rptDt = this._rptDt;

    this._groupSummaryViewSvc.getGroupSummaryData(inputParams).subscribe(
      data => {
        if (data && data.length > 0) {
          this.groupSummaryData = <SummaryData[]>data;
        }
        this.updateChildren = this.updateChildren ? false : true;
      },
      error => console.error(error)
    );

  }

  getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.href);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}


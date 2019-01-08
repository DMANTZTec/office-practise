import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { shareReplay } from 'rxjs/operators';
import { SummaryData } from '../../data/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class GroupSummaryService {
  private _groupSummaryCache$: Observable<SummaryData[]>;

  private _svcGroupSummaryDataParam: GroupSummarySvcParams;
  constructor(private _http: HttpClient) { }

  getGroupSummaryData(inputParams: GroupSummarySvcParams) {
    this._groupSummaryCache$ = this.requestGroupSummaryData(inputParams).pipe(shareReplay(1));
    return this._groupSummaryCache$;
  }

  private requestGroupSummaryData(inputParams: GroupSummarySvcParams) {
    this._svcGroupSummaryDataParam = inputParams;
    const httpBody = {
      'entityId': this._svcGroupSummaryDataParam.entityId,
      'entityLvl': this._svcGroupSummaryDataParam.entityLvl,
      'modality': this._svcGroupSummaryDataParam.modality,
      'rptDt': this._svcGroupSummaryDataParam.rptDt
    };

    const httpBodyString = JSON.stringify(httpBody);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };

    console.log(`getting Group Summary data for entity: ${this._svcGroupSummaryDataParam.entityId}
    level: ${this._svcGroupSummaryDataParam.entityLvl}
    modality: ${this._svcGroupSummaryDataParam.modality}
    report date: ${this._svcGroupSummaryDataParam.rptDt}`);

    // return  this._http.get<SummaryData[]>(environment.summaryApiUrl).pipe();
    return this._http.post<SummaryData[]>(environment.summaryApiUrl, httpBody, httpOptions).pipe();

  }

}

export class GroupSummarySvcParams {
  entityId: number;
  entityLvl: number;
  modality: string;
  rptDt: string;
}

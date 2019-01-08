import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';

import { shareReplay } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PhysicianDetailsData } from '../../data/model';

@Injectable()
export class PhysicianSingleListService {

  private _physicianDetailsCache$: Observable<PhysicianDetailsData[]>;

  private _svcPhyDetailsParams: PhySingleListSvcParams;
  constructor(private _http: HttpClient) { }

  getPhyDetailsData(inputParams: PhySingleListSvcParams) {
    this._physicianDetailsCache$ = this.requestPhyDetailsData(inputParams).pipe(shareReplay(1));
    return this._physicianDetailsCache$;
  }

  private requestPhyDetailsData(inputParams: PhySingleListSvcParams) {
    this._svcPhyDetailsParams = inputParams;
    const httpBody = {
      'entityId': this._svcPhyDetailsParams.entityId,
      'entityLvl': this._svcPhyDetailsParams.entityLvl,
      'include': 1, // HARDOCED AS ITS NOT BEEN USED IN THE UI EXISTS IN THE TABLE CALL
      'modality': this._svcPhyDetailsParams.modality,
      'outputLvl': 0,
      'pnumber': 0, // HARDOCED AS ITS NOT BEEN USED IN THE UI EXISTS IN THE TABLE CALL
      'rptDt': this._svcPhyDetailsParams.rptDt,
      'sortBy': this._svcPhyDetailsParams.sortBy
    };

    const httpBodyString = JSON.stringify(httpBody);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };

    console.log(`getting Physician details for Practice Group : ${this._svcPhyDetailsParams.entityId}
    level: ${this._svcPhyDetailsParams.entityLvl}
    modality: ${this._svcPhyDetailsParams.modality}
    report date: ${this._svcPhyDetailsParams.rptDt}
    sortBy:${this._svcPhyDetailsParams.sortBy}`);

    //return  this._http.get<PhysicianDetailsData[]>(environment.phySingleListApiUrl).pipe();
    return this._http.post<PhysicianDetailsData[]>(environment.phySingleListApiUrl, httpBody, httpOptions).pipe();
  }

}

export class PhySingleListSvcParams {
  entityId: number;
  entityLvl: number;
  modality: string;
  rptDt: string;
  sortBy: number;
}

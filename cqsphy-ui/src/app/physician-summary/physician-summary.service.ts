import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PhysicianSummaryService {

  constructor(private _http: HttpClient) { }

  // public getCategorySummaryData(entityId,modality,entityLvl){
  //   const httpBody = {
  //     'entityId': entityId,
  //     'entityLvl': entityLvl,
  //     'modality': modality,
  //     'rptDt': '02/28/2018'
  //   };
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
  //   };

  //   return this._http.post<any>(environment.kPICategoryApiUrl, httpBody, httpOptions).pipe();
  // }

}

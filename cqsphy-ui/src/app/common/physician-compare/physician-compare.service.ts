import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { shareReplay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PhysicianCompareHeaders, PhysicianCompareData } from '../../data/model';

@Injectable()
export class PhysicianCompareService {

  
  private _phyCompareCache$: Observable<PhysicianCompareData[]>;
  private _phyNamesCache$: Observable<PhysicianCompareHeaders>;

  private _svcParams: PhysicianCompareSvcParams;
  constructor(private _http: HttpClient) { }

  getPhyCompareData(inputParams: PhysicianCompareSvcParams) {
    this._phyCompareCache$ = this.requestPhyCompareData(inputParams).pipe(shareReplay(1));
    return this._phyCompareCache$;
  }

  getPhyNames(inputParams: PhysicianCompareSvcParams) {
    this._phyNamesCache$ = this.requestPhyNames(inputParams).pipe(shareReplay(1));
    return this._phyNamesCache$;
  }

  private requestPhyCompareData(inputParams: PhysicianCompareSvcParams) {
    this._svcParams = inputParams;
    const httpBody = {
      'modality': this._svcParams.modality
    };

    const httpBodyString = JSON.stringify(httpBody);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };

    return this._http.get<PhysicianCompareData[]>(environment.phyCompareApiUrl).pipe();
    // return this._http.post<PhysicianCompareData[]>(environment.phyCompareApiUrl, httpBody, httpOptions).pipe();
  }

  private requestPhyNames(inputParams: PhysicianCompareSvcParams) {
    this._svcParams = inputParams;
    const httpBody = {
      'modality': this._svcParams.modality
    };

    const httpBodyString = JSON.stringify(httpBody);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };

    return this._http.get<PhysicianCompareHeaders>(environment.phyCompareHeaders).pipe();
    // return this._http.post<PhysicianCompareHeaders[]>(environment.phyCompareApiUrl, httpBody, httpOptions).pipe();
  }

}

export class PhysicianCompareSvcParams {
  modality: string;
  checkedPhysList: string;
  
}

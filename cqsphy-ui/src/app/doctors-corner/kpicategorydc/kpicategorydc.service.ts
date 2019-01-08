import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { shareReplay } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KPICategoryData} from '../../data/model';
import { environment } from '../../../environments/environment';

@Injectable()
export class KpicategorydcService {

private _kpiCategoryCache$: Observable<KPICategoryData[]>;
 

  private _svcParams: KpiCategoryDcSvcParams;
  constructor(private _http: HttpClient) { }

  getKPICategoryDcData(inputParams: KpiCategoryDcSvcParams) {
    this._kpiCategoryCache$ = this.requestKPICategoryDcData(inputParams).pipe(shareReplay(1));
    return this._kpiCategoryCache$;
  }

 /* getKPIDetailsData(inputParams: KpiCategorySvcParams) {
    this._kpiDetailsCache$ = this.requestKPIDetailsData(inputParams).pipe(shareReplay(1));
    return this._kpiDetailsCache$;
  }*/

  private requestKPICategoryDcData(inputParams: KpiCategoryDcSvcParams) {
    this._svcParams = inputParams;
    const httpBody = {
      'entityId': this._svcParams.entityId,
      'entityLvl': this._svcParams.entityLvl,
      'modality': this._svcParams.modality,
      'rptDt': this._svcParams.rptDt
    };
    const httpBodyString = JSON.stringify(httpBody);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };

  //  return this._http.get<KPICategoryData[]>(environment.kPICategoryApiUrl).pipe();
  console.log(this._http.post<any>(environment.kPICategoryApiUrl, httpBody, httpOptions).pipe());
    return this._http.post<any>(environment.kPICategoryApiUrl, httpBody, httpOptions).pipe();
  
  }

  /*private requestKPIDetailsData(inputParams: KpiCategorySvcParams) {
    this._svcParams = inputParams;
    const httpBody = {
      'modality': this._svcParams.modality
    };

    const httpBodyString = JSON.stringify(httpBody);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };

    return this._http.get<KPIDetailsData[]>(environment.kPIDetailsApiUrl).pipe();
    // return this._http.post<KPIDetailsData[]>(environment.kPIDetailsApiUrl, httpBody, httpOptions).pipe();
  }*/

}

export class KpiCategoryDcSvcParams {
  entityId: number;
  entityLvl: number;
  modality: string;
  rptDt: string;
}

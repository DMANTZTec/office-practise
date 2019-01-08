import { KPIHeatMapDetail } from '../../data/model';
import { Observable } from 'rxjs/rx';
import { shareReplay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { EntityViewServiceParams } from '../../entityView/entityView.service';

@Injectable()
export class KPIHeatMapViewService {
    constructor(private _http: HttpClient) { }
    getPatientKPIHeatMap() {
        return this._http.get<KPIHeatMapDetail[]>(environment.KPIHeatMapView_URL).pipe();
    }
}

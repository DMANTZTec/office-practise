import { Patient, PatientMetric } from '../../data/model';
import { Observable } from 'rxjs/rx';
import { shareReplay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { EntityViewServiceParams } from '../../entityView/entityView.service';

@Injectable()
export class PatientDetailsViewService {
    private _cache$: Observable<Patient[]>;
    private _svcParams: PatientDetailsServiceParams;
    private _svcParamsPatientMetric: PatientMetricsServiceParams;
    constructor(private _http: HttpClient) { }

    getPatient(inputParams: PatientDetailsServiceParams) {
        if (
            !this._cache$ ||
            this._svcParams.clinicId !== inputParams.clinicId ||
            this._svcParams.entityLvl !== inputParams.entityLvl ||
            this._svcParams.entityType !== inputParams.entityType ||
            this._svcParams.groupId !== inputParams.groupId ||
            this._svcParams.modality !== inputParams.modality ||
            this._svcParams.patientType !== inputParams.patientType ||
            this._svcParams.physicianId !== inputParams.physicianId ||
            this._svcParams.reportDate !== inputParams.reportDate ||
            this._svcParams.sort !== inputParams.sort ||
            this._svcParams.sort !== inputParams.sort
        ) {
            return this.requestPatient(inputParams).pipe(shareReplay(1));
        }
    }

    private requestPatient(inputParams: PatientDetailsServiceParams) {
        // debugger;
        this._svcParams = inputParams;

        // console.log('body', inputParams);
        const body = {
            // 'clinicId': +inputParams.clinicId,
            // 'metricMetTarget': +inputParams.metricMetTarget,
            // 'modality': inputParams.modality,
            // 'patientType': +inputParams.patientType,
            // 'physicianId': +inputParams.physicianId,
            // 'reportDate': inputParams.reportDate,
            // 'screenName': inputParams.screenName,
            // 'sortBy': inputParams.sort,



            'clinic': +inputParams.clinicId,
            'entityLvl': inputParams.entityLvl,
            'entityType': inputParams.entityType,
            'metricDt': inputParams.reportDate,
            'modality': inputParams.modality,
            'patientType': +inputParams.patientType,
            'physId': +inputParams.physicianId,
            'practiceGroupId': +inputParams.groupId,
            'sortOrder': +inputParams.sort,


            // 'vClinic': +inputParams.clinicId, // entity level  0 - phy, 1 - group practice
            // 'vMetricDt': inputParams.reportDate,
            // 'vModality': inputParams.modality,
            // 'vPhysId': '10002517', // +inputParams.physicianId, // entity id
            // 'vSortOrder': inputParams.sort,
        };


        const bodyString = JSON.stringify(body);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json'
            })
        };

        console.log('body Patient List', JSON.stringify(body));
        return this._http
            .post<Patient[]>(
                environment.PatientsList_URL,
                bodyString,
                httpOptions
            )
            .pipe();
    }

    getPatientMetric(inputParams: PatientMetricsServiceParams) {
        // debugger;
        if (
            !this._cache$ ||
            this._svcParamsPatientMetric.reportDate !== inputParams.reportDate ||
            this._svcParamsPatientMetric.clinicId !== inputParams.clinicId ||
            this._svcParamsPatientMetric.patientId !== inputParams.patientId ||
            this._svcParamsPatientMetric.metricIndicator !== inputParams.metricIndicator ||
            this._svcParamsPatientMetric.physicianId !== inputParams.physicianId
        ) {
            return this._http.get<PatientMetric[]>(environment.PatientMetric_URL).pipe();
            // return this.requestPatientMetric(inputParams).pipe(shareReplay(1));
        }
    }


    private requestPatientMetric(inputParams: PatientMetricsServiceParams) {
        // debugger;
        this._svcParamsPatientMetric = inputParams;
        const body = {


            // 'vClinic': null,
            // 'vMetricDt': '11/30/2017',
            // 'vMetricMetInd': 0,
            // 'vModality': 'IHD',
            // 'vMrn': 5000345774,
            // 'vPhysId': 1861422743



            'vClinic': inputParams.clinicId,
            'vMetricDt': inputParams.reportDate,
            'vMetricMetInd': inputParams.metricIndicator,
            'vModality': inputParams.modality,
            'vMrn': inputParams.patientId,
            'vPhysId': '1861422743' // inputParams.physicianId
        };

        const bodyString = JSON.stringify(body);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json'
            })
        };

        console.log('body patient list', JSON.stringify(body));
        return this._http
            .post<PatientMetric[]>(
                environment.PatientMetric_URL,
                bodyString,
                httpOptions
            )
            .pipe();
    }
}


export class PatientDetailsServiceParams {
    reportDate: string;
    entityType: string;
    entityLvl: number; // physician or group
    patientType: string;
    physicianId: string;
    groupId: string;
    clinicId: string;
    modality: string;
    sort: string;
}

export class PatientMetricsServiceParams {
    clinicId: string;
    reportDate: string;
    metricIndicator: number;
    modality: string;
    patientId: string;
    physicianId: string;
}

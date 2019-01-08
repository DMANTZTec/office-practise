import { TestBed, inject } from '@angular/core/testing';

import { PatientSummaryViewService } from './patient-summary-view.service';

describe('PatientSummaryViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientSummaryViewService]
    });
  });

  it('should be created', inject([PatientSummaryViewService], (service: PatientSummaryViewService) => {
    expect(service).toBeTruthy();
  }));
});

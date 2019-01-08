import { TestBed, inject } from '@angular/core/testing';

import { PhysicianSummaryService } from './physician-summary.service';

describe('PhysicianSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhysicianSummaryService]
    });
  });

  it('should be created', inject([PhysicianSummaryService], (service: PhysicianSummaryService) => {
    expect(service).toBeTruthy();
  }));
});

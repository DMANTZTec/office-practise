import { TestBed, inject } from '@angular/core/testing';

import { PhysicianScoreOvertimeService } from './physician-score-overtime.service';

describe('PhysicianScoreOvertimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhysicianScoreOvertimeService]
    });
  });

  it('should be created', inject([PhysicianScoreOvertimeService], (service: PhysicianScoreOvertimeService) => {
    expect(service).toBeTruthy();
  }));
});

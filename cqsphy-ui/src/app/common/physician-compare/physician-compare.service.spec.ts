import { TestBed, inject } from '@angular/core/testing';

import { PhysicianCompareService } from './physician-compare.service';

describe('PhysicianCompareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhysicianCompareService]
    });
  });

  it('should be created', inject([PhysicianCompareService], (service: PhysicianCompareService) => {
    expect(service).toBeTruthy();
  }));
});

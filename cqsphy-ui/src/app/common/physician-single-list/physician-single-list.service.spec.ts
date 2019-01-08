import { TestBed, inject } from '@angular/core/testing';

import { PhysicianSingleListService } from './physician-single-list.service';

describe('PhysicianSingleListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhysicianSingleListService]
    });
  });

  it('should be created', inject([PhysicianSingleListService], (service: PhysicianSingleListService) => {
    expect(service).toBeTruthy();
  }));
});

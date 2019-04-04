import { TestBed } from '@angular/core/testing';

import { GetnameService } from './getname.service';

describe('GetnameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetnameService = TestBed.get(GetnameService);
    expect(service).toBeTruthy();
  });
});

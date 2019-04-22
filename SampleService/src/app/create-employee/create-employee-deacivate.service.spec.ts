import { TestBed } from '@angular/core/testing';

import { CreateEmployeeDeacivateService } from './create-employee-deacivate.service';

describe('CreateEmployeeDeacivateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateEmployeeDeacivateService = TestBed.get(CreateEmployeeDeacivateService);
    expect(service).toBeTruthy();
  });
});

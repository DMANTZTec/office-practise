import { TestBed, inject } from '@angular/core/testing';

import { KpiCategoryService } from './kpi-category.service';

describe('KpiCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KpiCategoryService]
    });
  });

  it('should be created', inject([KpiCategoryService], (service: KpiCategoryService) => {
    expect(service).toBeTruthy();
  }));
});

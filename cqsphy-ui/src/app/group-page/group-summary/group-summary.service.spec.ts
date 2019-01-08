import { TestBed, inject } from '@angular/core/testing';

import { GroupSummaryService } from './group-summary.service';

describe('GroupSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupSummaryService]
    });
  });

  it('should be created', inject([GroupSummaryService], (service: GroupSummaryService) => {
    expect(service).toBeTruthy();
  }));
});

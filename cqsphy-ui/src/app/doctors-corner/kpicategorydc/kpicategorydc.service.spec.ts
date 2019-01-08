import { TestBed, inject } from '@angular/core/testing';

import { KpicategorydcService } from './kpicategorydc.service';

describe('KpicategorydcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KpicategorydcService]
    });
  });

  it('should be created', inject([KpicategorydcService], (service: KpicategorydcService) => {
    expect(service).toBeTruthy();
  }));
});

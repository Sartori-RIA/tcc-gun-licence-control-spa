import { TestBed, inject } from '@angular/core/testing';

import { ExaminatorService } from './examinator.service';

describe('ExaminatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExaminatorService]
    });
  });

  it('should ...', inject([ExaminatorService], (service: ExaminatorService) => {
    expect(service).toBeTruthy();
  }));
});

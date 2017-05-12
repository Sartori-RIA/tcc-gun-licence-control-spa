import { TestBed, inject } from '@angular/core/testing';

import { DelegateService } from './delegate.service';

describe('DelegateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DelegateService]
    });
  });

  it('should ...', inject([DelegateService], (service: DelegateService) => {
    expect(service).toBeTruthy();
  }));
});

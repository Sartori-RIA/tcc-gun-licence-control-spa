import {inject, TestBed} from '@angular/core/testing';

import {LicenseValidatorService} from './license-validator.service';

describe('LicenseValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LicenseValidatorService]
    });
  });

  it('should be created', inject([LicenseValidatorService], (service: LicenseValidatorService) => {
    expect(service).toBeTruthy();
  }));
});

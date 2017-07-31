import { TestBed, inject } from '@angular/core/testing';

import { LicenceCategoryService } from './licence-category.service';

describe('LicenceCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LicenceCategoryService]
    });
  });

  it('should be created', inject([LicenceCategoryService], (service: LicenceCategoryService) => {
    expect(service).toBeTruthy();
  }));
});

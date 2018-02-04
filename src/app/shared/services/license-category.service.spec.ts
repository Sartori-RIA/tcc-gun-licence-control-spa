import {inject, TestBed} from '@angular/core/testing';

import {LicenseCategoryService} from './license-category.service';

describe('LicenseCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LicenseCategoryService]
    });
  });

  it('should be created', inject([LicenseCategoryService], (service: LicenseCategoryService) => {
    expect(service).toBeTruthy();
  }));
});

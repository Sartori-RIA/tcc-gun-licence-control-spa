import { TestBed, inject } from '@angular/core/testing';

import { UserCategoryService } from './user-category.service';

describe('UserCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCategoryService]
    });
  });

  it('should be created', inject([UserCategoryService], (service: UserCategoryService) => {
    expect(service).toBeTruthy();
  }));
});

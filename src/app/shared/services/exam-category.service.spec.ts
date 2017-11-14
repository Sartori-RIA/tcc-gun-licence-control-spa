import {inject, TestBed} from '@angular/core/testing';

import {ExamCategoryService} from './exam-category.service';

describe('ExamCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExamCategoryService]
    });
  });

  it('should be created', inject([ExamCategoryService], (service: ExamCategoryService) => {
    expect(service).toBeTruthy();
  }));
});

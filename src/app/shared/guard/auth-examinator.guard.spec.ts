import {inject, TestBed} from '@angular/core/testing';

import {AuthExaminatorGuard} from './auth-examinator.guard';

describe('AuthExaminatorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthExaminatorGuard]
    });
  });

  it('should ...', inject([AuthExaminatorGuard], (guard: AuthExaminatorGuard) => {
    expect(guard).toBeTruthy();
  }));
});

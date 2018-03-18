import {inject, TestBed} from '@angular/core/testing';

import {AuthDelegateGuard} from './auth-delegate.guard';

describe('AuthDelegateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthDelegateGuard]
    });
  });

  it('should ...', inject([AuthDelegateGuard], (guard: AuthDelegateGuard) => {
    expect(guard).toBeTruthy();
  }));
});

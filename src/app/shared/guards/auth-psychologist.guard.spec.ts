import {inject, TestBed} from '@angular/core/testing';

import {AuthPsychologistGuard} from './auth-psychologist.guard';

describe('AuthPsychologistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthPsychologistGuard]
    });
  });

  it('should ...', inject([AuthPsychologistGuard], (guard: AuthPsychologistGuard) => {
    expect(guard).toBeTruthy();
  }));
});

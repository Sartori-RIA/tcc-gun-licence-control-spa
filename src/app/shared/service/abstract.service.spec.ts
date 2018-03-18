import {inject, TestBed} from '@angular/core/testing';

import {AbstractService} from './abstract.service';
import {User} from '../model/user';

describe('AbstractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractService]
    });
  });

  it('should be created', inject([AbstractService], (service: AbstractService<User>) => {
    expect(service).toBeTruthy();
  }));
});

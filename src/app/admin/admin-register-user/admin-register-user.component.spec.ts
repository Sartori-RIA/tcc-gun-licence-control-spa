import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminRegisterUserComponent} from './admin-register-user.component';

describe('AdminRegisterUserComponent', () => {
  let component: AdminRegisterUserComponent;
  let fixture: ComponentFixture<AdminRegisterUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRegisterUserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

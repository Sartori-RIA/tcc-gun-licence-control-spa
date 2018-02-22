import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminRegisterLicensesComponent} from './admin-register-licenses.component';

describe('AdminRegisterLicensesComponent', () => {
  let component: AdminRegisterLicensesComponent;
  let fixture: ComponentFixture<AdminRegisterLicensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRegisterLicensesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterLicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

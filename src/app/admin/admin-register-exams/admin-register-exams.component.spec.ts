import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminRegisterExamsComponent} from './admin-register-exams.component';

describe('AdminRegisterExamsComponent', () => {
  let component: AdminRegisterExamsComponent;
  let fixture: ComponentFixture<AdminRegisterExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRegisterExamsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

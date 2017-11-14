import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormUserTypeComponent} from './form-user-type.component';

describe('FormUserTypeComponent', () => {
  let component: FormUserTypeComponent;
  let fixture: ComponentFixture<FormUserTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormUserTypeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

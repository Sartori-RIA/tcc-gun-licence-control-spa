import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminRegisterCititesComponent} from './admin-register-citites.component';

describe('AdminRegisterCititesComponent', () => {
  let component: AdminRegisterCititesComponent;
  let fixture: ComponentFixture<AdminRegisterCititesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRegisterCititesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterCititesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should save', () => {
    expect(component).toBeTruthy();
  });
});

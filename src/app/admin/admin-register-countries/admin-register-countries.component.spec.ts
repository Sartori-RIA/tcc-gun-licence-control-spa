import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterCountriesComponent } from './admin-register-countries.component';

describe('AdminRegisterCountriesComponent', () => {
  let component: AdminRegisterCountriesComponent;
  let fixture: ComponentFixture<AdminRegisterCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegisterCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

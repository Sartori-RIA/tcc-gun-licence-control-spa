import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ValidLicenseComponent} from './valid-license.component';

describe('ValidLicenseComponent', () => {
  let component: ValidLicenseComponent;
  let fixture: ComponentFixture<ValidLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ValidLicenseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

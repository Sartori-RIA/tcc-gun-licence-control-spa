import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LicenseInvalidComponent} from './license-invalid.component';

describe('LicenseInvalidComponent', () => {
  let component: LicenseInvalidComponent;
  let fixture: ComponentFixture<LicenseInvalidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LicenseInvalidComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseInvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

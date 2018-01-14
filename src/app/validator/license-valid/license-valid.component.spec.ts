import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LicenseValidComponent} from './license-valid.component';

describe('LicenseValidComponent', () => {
  let component: LicenseValidComponent;
  let fixture: ComponentFixture<LicenseValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LicenseValidComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

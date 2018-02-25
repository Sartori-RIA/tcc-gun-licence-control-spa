import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedProgressLicenseComponent } from './shared-progress-license.component';

describe('SharedProgressLicenseComponent', () => {
  let component: SharedProgressLicenseComponent;
  let fixture: ComponentFixture<SharedProgressLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedProgressLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedProgressLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

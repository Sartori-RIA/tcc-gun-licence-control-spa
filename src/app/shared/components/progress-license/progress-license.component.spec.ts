import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressLicenseComponent } from './progress-license.component';

describe('ProgressLicenseComponent', () => {
  let component: ProgressLicenseComponent;
  let fixture: ComponentFixture<ProgressLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

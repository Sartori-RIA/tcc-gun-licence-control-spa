import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedValidLicenseComponent } from './shared-valid-license.component';

describe('SharedValidLicenseComponent', () => {
  let component: SharedValidLicenseComponent;
  let fixture: ComponentFixture<SharedValidLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedValidLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedValidLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

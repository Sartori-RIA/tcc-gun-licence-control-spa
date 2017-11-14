import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LicenceValidComponent} from './licence-valid.component';

describe('LicenceValidComponent', () => {
  let component: LicenceValidComponent;
  let fixture: ComponentFixture<LicenceValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LicenceValidComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenceValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

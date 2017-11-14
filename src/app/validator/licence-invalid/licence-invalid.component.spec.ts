import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LicenceInvalidComponent} from './licence-invalid.component';

describe('LicenceInvalidComponent', () => {
  let component: LicenceInvalidComponent;
  let fixture: ComponentFixture<LicenceInvalidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LicenceInvalidComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenceInvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

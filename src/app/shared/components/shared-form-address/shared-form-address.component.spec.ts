import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedFormAddressComponent} from './shared-form-address.component';

describe('SharedFormAddressComponent', () => {
  let component: SharedFormAddressComponent;
  let fixture: ComponentFixture<SharedFormAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedFormAddressComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should save', () => {
    expect(component).toBeTruthy();
  });
});

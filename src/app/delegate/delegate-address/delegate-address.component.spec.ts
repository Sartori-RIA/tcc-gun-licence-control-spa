import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegateAddressComponent } from './delegate-address.component';

describe('DelegateAddressComponent', () => {
  let component: DelegateAddressComponent;
  let fixture: ComponentFixture<DelegateAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegateAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegateAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

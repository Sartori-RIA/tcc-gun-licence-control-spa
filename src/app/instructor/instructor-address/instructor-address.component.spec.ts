import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAddressComponent } from './instructor-address.component';

describe('InstructorAddressComponent', () => {
  let component: InstructorAddressComponent;
  let fixture: ComponentFixture<InstructorAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

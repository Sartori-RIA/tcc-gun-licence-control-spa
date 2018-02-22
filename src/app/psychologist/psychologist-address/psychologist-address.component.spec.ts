import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PsychologistAddressComponent} from './psychologist-address.component';

describe('PsychologistAddressComponent', () => {
  let component: PsychologistAddressComponent;
  let fixture: ComponentFixture<PsychologistAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PsychologistAddressComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

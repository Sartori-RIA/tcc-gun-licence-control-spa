import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PsychologistHomeComponent} from './psychologist-home.component';

describe('PsychologistHomeComponent', () => {
  let component: PsychologistHomeComponent;
  let fixture: ComponentFixture<PsychologistHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PsychologistHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should save', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PsychologistEvaluateComponent} from './psychologist-evaluate.component';

describe('PsychologistEvaluateComponent', () => {
  let component: PsychologistEvaluateComponent;
  let fixture: ComponentFixture<PsychologistEvaluateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PsychologistEvaluateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should save', () => {
    expect(component).toBeTruthy();
  });
});

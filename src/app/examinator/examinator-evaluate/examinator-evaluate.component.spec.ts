import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExaminatorEvaluateComponent} from './examinator-evaluate.component';

describe('ExaminatorEvaluateComponent', () => {
  let component: ExaminatorEvaluateComponent;
  let fixture: ComponentFixture<ExaminatorEvaluateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExaminatorEvaluateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminatorEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should save', () => {
    expect(component).toBeTruthy();
  });
});

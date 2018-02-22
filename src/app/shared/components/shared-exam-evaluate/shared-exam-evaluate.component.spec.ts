import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedExamEvaluateComponent} from './shared-exam-evaluate.component';

describe('SharedExamEvaluateComponent', () => {
  let component: SharedExamEvaluateComponent;
  let fixture: ComponentFixture<SharedExamEvaluateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedExamEvaluateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedExamEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

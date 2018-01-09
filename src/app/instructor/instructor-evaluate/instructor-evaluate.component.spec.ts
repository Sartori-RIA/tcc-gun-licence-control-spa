import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InstructorEvaluateComponent} from './instructor-evaluate.component';

describe('InstructorEvaluateComponent', () => {
  let component: InstructorEvaluateComponent;
  let fixture: ComponentFixture<InstructorEvaluateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorEvaluateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

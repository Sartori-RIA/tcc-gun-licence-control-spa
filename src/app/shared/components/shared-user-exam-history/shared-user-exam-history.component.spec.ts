import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedUserExamHistoryComponent} from './shared-user-exam-history.component';

describe('SharedUserExamHistoryComponent', () => {
  let component: SharedUserExamHistoryComponent;
  let fixture: ComponentFixture<SharedUserExamHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedUserExamHistoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedUserExamHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

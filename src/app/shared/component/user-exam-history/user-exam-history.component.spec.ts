import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserExamHistoryComponent} from './user-exam-history.component';

describe('UserExamHistoryComponent', () => {
  let component: UserExamHistoryComponent;
  let fixture: ComponentFixture<UserExamHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserExamHistoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExamHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

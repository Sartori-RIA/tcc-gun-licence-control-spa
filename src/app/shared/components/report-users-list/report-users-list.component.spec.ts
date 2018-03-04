import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReportUsersListComponent} from './report-users-list.component';

describe('ReportUsersListComponent', () => {
  let component: ReportUsersListComponent;
  let fixture: ComponentFixture<ReportUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportUsersListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should save', () => {
    expect(component).toBeTruthy();
  });
});

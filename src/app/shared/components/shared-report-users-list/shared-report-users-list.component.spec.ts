import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedReportUsersListComponent} from './shared-report-users-list.component';

describe('SharedReportUsersListComponent', () => {
  let component: SharedReportUsersListComponent;
  let fixture: ComponentFixture<SharedReportUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedReportUsersListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedReportUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should save', () => {
    expect(component).toBeTruthy();
  });
});

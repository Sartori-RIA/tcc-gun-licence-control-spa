import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegateReportsComponent } from './delegate-reports.component';

describe('DelegateReportsComponent', () => {
  let component: DelegateReportsComponent;
  let fixture: ComponentFixture<DelegateReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegateReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegateReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

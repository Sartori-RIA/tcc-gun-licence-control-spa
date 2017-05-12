import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminatorSidebarComponent } from './examinator-sidebar.component';

describe('ExaminatorSidebarComponent', () => {
  let component: ExaminatorSidebarComponent;
  let fixture: ComponentFixture<ExaminatorSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminatorSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminatorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

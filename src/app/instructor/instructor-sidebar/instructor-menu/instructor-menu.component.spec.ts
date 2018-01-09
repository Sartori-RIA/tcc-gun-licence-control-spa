import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InstructorMenuComponent} from './instructor-menu.component';

describe('InstructorMenuComponent', () => {
  let component: InstructorMenuComponent;
  let fixture: ComponentFixture<InstructorMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

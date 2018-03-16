import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExaminatorHomeComponent} from './examinator-home.component';

describe('ExaminatorHomeComponent', () => {
  let component: ExaminatorHomeComponent;
  let fixture: ComponentFixture<ExaminatorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExaminatorHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminatorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should save', () => {
    expect(component).toBeTruthy();
  });
});

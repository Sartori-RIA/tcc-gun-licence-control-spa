import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExaminatorProfileComponent} from './examinator-profile.component';

describe('ExaminatorProfileComponent', () => {
  let component: ExaminatorProfileComponent;
  let fixture: ComponentFixture<ExaminatorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExaminatorProfileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminatorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should save', () => {
    expect(component).toBeTruthy();
  });
});

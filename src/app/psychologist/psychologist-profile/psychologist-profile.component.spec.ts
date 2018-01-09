import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PsychologistProfileComponent} from './psychologist-profile.component';

describe('PsychologistProfileComponent', () => {
  let component: PsychologistProfileComponent;
  let fixture: ComponentFixture<PsychologistProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PsychologistProfileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

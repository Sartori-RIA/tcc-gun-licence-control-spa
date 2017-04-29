import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPsychologistComponent } from './register-psychologist.component';

describe('RegisterPsychologistComponent', () => {
  let component: RegisterPsychologistComponent;
  let fixture: ComponentFixture<RegisterPsychologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPsychologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPsychologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

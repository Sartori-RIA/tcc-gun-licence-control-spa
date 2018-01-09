import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PsychologistMenuComponent} from './psychologist-menu.component';

describe('PsychologistMenuComponent', () => {
  let component: PsychologistMenuComponent;
  let fixture: ComponentFixture<PsychologistMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PsychologistMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

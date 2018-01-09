import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PsychologistReportComponent} from './psychologist-report.component';

describe('PsychologistReportComponent', () => {
  let component: PsychologistReportComponent;
  let fixture: ComponentFixture<PsychologistReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PsychologistReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

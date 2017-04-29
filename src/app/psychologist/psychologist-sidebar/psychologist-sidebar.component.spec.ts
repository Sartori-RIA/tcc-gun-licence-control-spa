import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistSidebarComponent } from './psychologist-sidebar.component';

describe('PsychologistSidebarComponent', () => {
  let component: PsychologistSidebarComponent;
  let fixture: ComponentFixture<PsychologistSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

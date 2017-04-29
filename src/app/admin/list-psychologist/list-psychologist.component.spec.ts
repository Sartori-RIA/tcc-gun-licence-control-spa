import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPsychologistComponent } from './list-psychologist.component';

describe('ListPsychologistComponent', () => {
  let component: ListPsychologistComponent;
  let fixture: ComponentFixture<ListPsychologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPsychologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPsychologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

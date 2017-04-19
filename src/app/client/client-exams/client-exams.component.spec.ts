import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientExamsComponent } from './client-exams.component';

describe('ClientExamsComponent', () => {
  let component: ClientExamsComponent;
  let fixture: ComponentFixture<ClientExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

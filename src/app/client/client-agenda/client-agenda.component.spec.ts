import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClientAgendaComponent} from './client-agenda.component';

describe('ClientAgendaComponent', () => {
  let component: ClientAgendaComponent;
  let fixture: ComponentFixture<ClientAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientAgendaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should save', () => {
    expect(component).toBeTruthy();
  });
});

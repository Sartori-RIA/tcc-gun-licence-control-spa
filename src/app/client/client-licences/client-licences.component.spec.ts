import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLicencesComponent } from './client-licences.component';

describe('ClientLicencesComponent', () => {
  let component: ClientLicencesComponent;
  let fixture: ComponentFixture<ClientLicencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLicencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLicencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

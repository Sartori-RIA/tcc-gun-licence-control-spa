import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLicenceComponent } from './client-licence.component';

describe('ClientLicenceComponent', () => {
  let component: ClientLicenceComponent;
  let fixture: ComponentFixture<ClientLicenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLicenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

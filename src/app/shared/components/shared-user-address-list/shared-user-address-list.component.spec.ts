import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUserAddressListComponent } from './shared-user-address-list.component';

describe('SharedUserAddressListComponent', () => {
  let component: SharedUserAddressListComponent;
  let fixture: ComponentFixture<SharedUserAddressListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedUserAddressListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedUserAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

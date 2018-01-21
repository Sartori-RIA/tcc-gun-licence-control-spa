import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUserUpdateComponent } from './shared-user-update.component';

describe('SharedUserUpdateComponent', () => {
  let component: SharedUserUpdateComponent;
  let fixture: ComponentFixture<SharedUserUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedUserUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedUserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

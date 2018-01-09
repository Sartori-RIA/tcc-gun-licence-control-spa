import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedUserDetailComponent} from './shared-user-detail.component';

describe('SharedUserDetailComponent', () => {
  let component: SharedUserDetailComponent;
  let fixture: ComponentFixture<SharedUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedUserDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DelegateProfileComponent} from './delegate-profile.component';

describe('DelegateProfileComponent', () => {
  let component: DelegateProfileComponent;
  let fixture: ComponentFixture<DelegateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DelegateProfileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

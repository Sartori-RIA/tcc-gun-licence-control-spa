import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DelegateHomeComponent} from './delegate-home.component';

describe('DelegateHomeComponent', () => {
  let component: DelegateHomeComponent;
  let fixture: ComponentFixture<DelegateHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DelegateHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

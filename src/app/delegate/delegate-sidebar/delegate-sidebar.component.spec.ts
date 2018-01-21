import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DelegateSidebarComponent} from './delegate-sidebar.component';

describe('DelegateSidebarComponent', () => {
  let component: DelegateSidebarComponent;
  let fixture: ComponentFixture<DelegateSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DelegateSidebarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegateSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should save', () => {
    expect(component).toBeTruthy();
  });
});

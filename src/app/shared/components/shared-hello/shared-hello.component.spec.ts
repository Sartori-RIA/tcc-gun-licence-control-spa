import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHelloComponent } from './shared-hello.component';

describe('SharedHelloComponent', () => {
  let component: SharedHelloComponent;
  let fixture: ComponentFixture<SharedHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

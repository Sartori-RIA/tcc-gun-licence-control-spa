import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDelegateComponent } from './register-delegate.component';

describe('RegisterDelegateComponent', () => {
  let component: RegisterDelegateComponent;
  let fixture: ComponentFixture<RegisterDelegateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDelegateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDelegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

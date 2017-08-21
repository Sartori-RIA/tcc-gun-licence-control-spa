import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterYourselfComponent } from './register-yourself.component';

describe('RegisterYourselfComponent', () => {
  let component: RegisterYourselfComponent;
  let fixture: ComponentFixture<RegisterYourselfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterYourselfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedFlashMessageComponent} from './shared-flash-message.component';

describe('SharedFlashMessageComponent', () => {
  let component: SharedFlashMessageComponent;
  let fixture: ComponentFixture<SharedFlashMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedFlashMessageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFlashMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

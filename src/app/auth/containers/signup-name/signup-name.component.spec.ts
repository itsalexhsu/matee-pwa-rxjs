import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupNameComponent } from './signup-name.component';

describe('EnterNameComponent', () => {
  let component: SignupNameComponent;
  let fixture: ComponentFixture<SignupNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendCardComponent } from './blend-card.component';

describe('BlendCardComponent', () => {
  let component: BlendCardComponent;
  let fixture: ComponentFixture<BlendCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlendCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

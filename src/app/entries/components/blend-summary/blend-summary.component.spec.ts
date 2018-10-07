import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendSummaryComponent } from './blend-summary.component';

describe('BlendSummaryComponent', () => {
  let component: BlendSummaryComponent;
  let fixture: ComponentFixture<BlendSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlendSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlendSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendDetailComponent } from './blend-detail.component';

describe('BlendDetailComponent', () => {
  let component: BlendDetailComponent;
  let fixture: ComponentFixture<BlendDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlendDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlendDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

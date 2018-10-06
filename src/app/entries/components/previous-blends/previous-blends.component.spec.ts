import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousBlendsComponent } from './previous-blends.component';

describe('PreviousBlendsComponent', () => {
  let component: PreviousBlendsComponent;
  let fixture: ComponentFixture<PreviousBlendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousBlendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousBlendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousProductComponent } from './previous-product.component';

describe('PreviousProductComponent', () => {
  let component: PreviousProductComponent;
  let fixture: ComponentFixture<PreviousProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

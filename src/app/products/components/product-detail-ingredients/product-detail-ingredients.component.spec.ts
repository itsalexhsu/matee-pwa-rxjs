import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailIngredientsComponent } from './product-detail-ingredients.component';

describe('ProductDetailIngredientsComponent', () => {
  let component: ProductDetailIngredientsComponent;
  let fixture: ComponentFixture<ProductDetailIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

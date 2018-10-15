import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailBrewingGuideComponent } from './product-detail-brewing-guide.component';

describe('ProductDetailBrewingGuideComponent', () => {
  let component: ProductDetailBrewingGuideComponent;
  let fixture: ComponentFixture<ProductDetailBrewingGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailBrewingGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailBrewingGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-detail-ingredients',
  templateUrl: './product-detail-ingredients.component.html',
  styleUrls: ['./product-detail-ingredients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailIngredientsComponent {

  @Input() ingredient: any

  constructor() { }

  ngOnInit() {
  }

}

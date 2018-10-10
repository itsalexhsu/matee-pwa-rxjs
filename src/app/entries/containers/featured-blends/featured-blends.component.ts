import { Component, Input, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as cart from '../../../core/actions/cart';

import * as fromEntries from '../../reducers/';
import * as product from '../../actions/product';

import { Product, Variant, ShopifyService, LineItem, GlobalService } from '../../../shared';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-featured-blends',
  templateUrl: './featured-blends.component.html',
  styleUrls: ['./featured-blends.component.scss']
})
export class FeaturedBlendsComponent {

  @Input() blend: Product
  blendDetail

  onAddToCartClick(event) {
    if (event) {
      let lineItem = new LineItem(this.blendDetail.variants[0], 1)
      this.store.dispatch(new cart.AddItemToCart(lineItem))
    }
  }

  onToggleFavoriteClick(event) {
    if (event) {
      console.log(event)
    }
  }

  constructor(
    private globalService: GlobalService,
    private shopifyService: ShopifyService,
    private store: Store<fromEntries.State>,
  ) {
    
  }

  ngOnInit() {
    // this.store.dispatch(new product.Load(this.blend.id))
    this.shopifyService.getProductById(this.blend.id)
    .then(product => {
      this.blendDetail = product
    })
  }

}
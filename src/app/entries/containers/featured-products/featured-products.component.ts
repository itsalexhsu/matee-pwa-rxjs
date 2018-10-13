import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as cart from '../../../core/actions/cart';

import * as fromEntries from '../../reducers/';
import * as product from '../../actions/product';
import * as snackbar from '../../../core/actions/snackbar';

import { Product, Variant, ShopifyService, LineItem } from '../../../shared';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-featured-products',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent {

  @Input() product: Product
  productDetails

  onAddToCart(event) {
    if (event) {
      let lineItem = new LineItem(this.productDetails.variants[0], 1)
      this.store.dispatch(new cart.AddItem(lineItem))

      let message = {message: 'Item added to cart', action: 'Close' }
      this.store.dispatch(new snackbar.ShowSnackbar(message))
    }
  }

  onToggleFavorite(event) {
    if (event) {
      console.log(event)
    }
  }

  constructor(
    private shopifyService: ShopifyService,
    private store: Store<fromEntries.State>,
  ) {
    
  }

  ngOnChanges() {
    this.shopifyService.getProductById(this.product.id)
    .then(product => {
      if (product) {
        this.productDetails = product
      }
    })
  }

}
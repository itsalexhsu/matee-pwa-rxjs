import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import * as cart from '../../actions/cart';
import * as snackbar from '../../../core/actions/snackbar';

import { LineItem } from 'src/app/shared';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent {

  @Input() lineItem: LineItem

  @Output() addToCart = new EventEmitter()
  @Output() removeFromCart = new EventEmitter()

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
  }

  get id() {
    return this.lineItem.id
  }

  get title() {
    return this.lineItem.variant.title
  }
  
  get image() {
    return this.lineItem.variant.image.src
  }

  get altText() {
    return this.lineItem.variant.image.altText
  }

  onAddToCart(event) {
    if (event) {
      let lineItem = new LineItem(this.lineItem.variant, 1)
      this.store.dispatch(new cart.AddItem(lineItem))
    }
  }

  onRemoveFromCart(event) {
    if (event) {
      this.store.dispatch (new cart.RemoveItem(this.lineItem))

      let message = {message: 'Item removed from cart', action: 'Close' }
      this.store.dispatch(new snackbar.ShowSnackbar(message))
    }
  }

}

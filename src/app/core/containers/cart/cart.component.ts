import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { tap, map, mergeMap } from 'rxjs/operators';

import { Observable, Subscription } from 'rxjs';

import { CartService } from '../../../shared/services/cart'
import { GlobalService, LineItem, ShopifyService } from '../../../shared'

import * as fromRoot from '../../../reducers/';
import * as layout from '../../../core/actions/layout';
import * as cart from '../../actions/cart';

@Component({
  selector: 'app-cart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  @Input() lineItems: LineItem[]

  lineItems$: Observable<LineItem[]> = this.store.pipe(select(fromRoot.getLineItems))

  constructor(
    private shopifyService: ShopifyService,
    private globalService: GlobalService,
    private cartService: CartService,
    private store: Store<fromRoot.State>,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new cart.LoadCart)
  }

  closeCart() {
    this.store.dispatch(new layout.hideCheckoutButton)
    this.store.dispatch(new layout.ShowFooter)
    this.store.dispatch(new layout.showCartButton)
    this.store.dispatch(new cart.Close)
  }
  
}
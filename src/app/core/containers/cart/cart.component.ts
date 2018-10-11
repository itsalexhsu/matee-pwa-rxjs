import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { tap, map, mergeMap } from 'rxjs/operators';

import { Observable, Subscription, from } from 'rxjs';

import { CartService } from '../../../shared/services/cart'
import { LineItem } from '../../../shared'

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

  lineItems$: Observable<LineItem[]> = this.store.pipe(select(fromRoot.getLineItems))

  constructor(
    private cartService: CartService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new layout.HideCartButton)
    this.store.dispatch(new layout.HideFooter)
    this.store.dispatch(new layout.ShowCheckoutButton)
    this.store.dispatch(new cart.LoadCart)
  }

  ngOnDestroy() {
    this.store.dispatch(new layout.HideCheckoutButton)
  }
  
}
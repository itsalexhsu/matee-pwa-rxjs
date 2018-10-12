import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

import * as fromEntries from '../../../entries/reducers';
import * as fromAuth from '../../../auth/reducers';
import * as fromRoot from '../../../reducers';
import * as layout from '../../actions/layout';
import * as cart from '../../actions/cart';
import * as checkout from '../../actions/checkout';
import * as snackbar from '../../../core/actions/snackbar';

import { LineItem, Product, Variant } from '../../../shared'

import { CartService } from '../../../shared';

import * as localForage from "localforage";

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lineItems$: Observable<LineItem[]> = this.store.pipe(select(fromRoot.getLineItems))

  showFooter$: Observable<boolean> = this.store.pipe(select(fromRoot.getShowFooter))
  showCartButton$: Observable<boolean> = this.store.pipe(select(fromRoot.getShowCartButton))
  showAddCartButton$: Observable<boolean> = this.store.pipe(select(fromRoot.getAddItemButton))
  showCheckoutButton$: Observable<boolean> = this.store.pipe(select(fromRoot.getShowCheckoutButton))

  // user$: Observable<CognitoUserAttribute[]> = this.store.pipe(select(fromAuth.getUserAttributes))
  // isLoggedIn$: Observable<boolean> = this.store.pipe(select(fromAuth.getAuthenticated))

  selectedVariant$: Observable<Variant> = this.store.pipe(select(fromEntries.getSelectedVariant))

  ngOnInit() {
    this.store.dispatch(new layout.ShowFooter)
    this.store.dispatch(new layout.ShowCartButton)
    this.store.dispatch(new cart.LoadCart)
  }

  constructor(
    private cartService: CartService,
    private store: Store<fromRoot.State>,
  ) { }

  checkOut(event) {
    this.store.dispatch(new checkout.CreateUpdate)
  }

  addVariantToCart(event) {
    if (event) {
      this.selectedVariant$
      .pipe(map(payload => payload))
      .subscribe((variant: Variant) => {
        let lineItem = new LineItem(variant, 1)
        this.store.dispatch(new cart.AddItem(lineItem))

        let message = {message: 'Item added to cart', action: 'Close' }
        this.store.dispatch(new snackbar.ShowSnackbar(message))
      })
    }
  }

}
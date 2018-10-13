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

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lineItems$: Observable<LineItem[]> = this.store.pipe(select(fromRoot.getLineItems))
  checkoutLink$: Observable<string> = this.store.pipe(select(fromRoot.getCheckoutLink))

  showFooter$: Observable<boolean> = this.store.pipe(select(fromRoot.getShowFooter))
  showCartButton$: Observable<boolean> = this.store.pipe(select(fromRoot.getShowCartButton))
  showAddCartButton$: Observable<boolean> = this.store.pipe(select(fromRoot.getAddItemButton))
  showCheckoutButton$: Observable<boolean> = this.store.pipe(select(fromRoot.getShowCheckoutButton))

  // user$: Observable<CognitoUserAttribute[]> = this.store.pipe(select(fromAuth.getUserAttributes))
  // isLoggedIn$: Observable<boolean> = this.store.pipe(select(fromAuth.getAuthenticated))

  variant$: Observable<Variant> = this.store.pipe(select(fromEntries.getSelectedVariant))
  
  variant: Variant
  checkoutLink: string

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new layout.ShowFooter)
    this.store.dispatch(new layout.ShowCartButton)
    this.store.dispatch(new cart.LoadCart)

    this.variant$
    .pipe(map(payload => payload))
    .subscribe((variant: Variant) => {
      this.variant = variant
    })

    this.checkoutLink$
    .pipe(map(payload => payload))
    .subscribe((link: string) => {
      this.checkoutLink = link
    })

  }

  checkOut(event) {
    window.open(this.checkoutLink)
    this.store.dispatch(new cart.ClearCart)
  }

  addVariantToCart(event) {
    if (event) {
      let lineItem = new LineItem(this.variant, 1)
      this.store.dispatch(new cart.AddItem(lineItem))

      let message = {message: 'Item added to cart', action: 'Close' }
      this.store.dispatch(new snackbar.ShowSnackbar(message))
    }
  }

}
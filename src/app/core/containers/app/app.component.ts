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

import { GlobalService, LineItem, Product, Variant } from '../../../shared'

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lineItems: LineItem[] = []

  blend$: Observable<Product> = this.store.pipe(select(fromEntries.getBlendResult))

  showFooter$: Observable<boolean> = this.store.pipe(select(fromRoot.getShowFooter))
  showCartButton$: Observable<boolean> = this.store.pipe(select(fromRoot.getShowCartButton))
  showAddCartButton$: Observable<boolean> = this.store.pipe(select(fromRoot.getAddItemButton))
  showCheckoutButton$: Observable<boolean> = this.store.pipe(select(fromRoot.getShowCheckoutButton))

  user$: Observable<CognitoUserAttribute[]> = this.store.pipe(select(fromAuth.getUserAttributes))
  isLoggedIn$: Observable<boolean> = this.store.pipe(select(fromAuth.getAuthenticated))

  newLineItem$: Observable<LineItem> = this.store.pipe(select(fromRoot.getNewLineItem))
  removedLineItem$: Observable<LineItem> = this.store.pipe(select(fromRoot.getRemovedItem))
  selectedVariant$: Observable<Variant> = this.store.pipe(select(fromEntries.getSelectedVariant))

  showCart$: Observable<boolean> = this.store.pipe(select(fromRoot.getShowCart))

  ngOnInit() {
    this.store.dispatch(new layout.ShowFooter)
    this.store.dispatch(new layout.showCartButton)
    this.store.dispatch(new layout.hideAddItemButton)

    // this.newLineItem$
    // .pipe(map(payload => payload))
    // .subscribe((lineItem: LineItem) => {
    //   if (lineItem) {
    //     this.lineItems.push(lineItem)
    //   }
    // })

    // this.removedLineItem$
    // .pipe(map(payload => payload))
    // .subscribe((lineItem: LineItem) => {
    //   if (lineItem) {
    //     let index = this.lineItems.indexOf(lineItem)
    //     if (index!=-1) {
    //       this.lineItems.splice(index, 1)
    //     }
    //   }
    // })
  }

  constructor(
    private store: Store<fromRoot.State>,
    private globalService: GlobalService,
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
      })
    }
  }

  showCart(event) {
    if (event) {
      this.store.dispatch(new cart.Open)
      this.store.dispatch(new layout.showCheckoutButton)
      this.store.dispatch(new layout.HideFooter)
      this.store.dispatch(new layout.hideCartButton)
      this.store.dispatch(new layout.hideAddItemButton)
    }
  }

}
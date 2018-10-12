import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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

  checkoutLink$: Observable<string> = this.store.pipe(select(fromRoot.getCheckoutLink))
  lineItems$: Observable<LineItem[]> = this.store.pipe(select(fromRoot.getLineItems))
  checkoutLink

  constructor(
    private sanitizer: DomSanitizer,
    private cartService: CartService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new layout.HideCartButton)
    this.store.dispatch(new layout.HideFooter)
    this.store.dispatch(new layout.ShowCheckoutButton)
    this.store.dispatch(new cart.LoadCart)

    // this.checkoutLink$
    // .pipe(map(payload => payload))
    // .subscribe(link => {
    //   if (link) {
    //     console.log(link)
    //     // this.checkoutLink = this.sanitizer.bypassSecurityTrustResourceUrl(link)
    //   }
    // })
  }

  ngOnDestroy() {
    this.store.dispatch(new layout.HideCheckoutButton)
  }
  
}
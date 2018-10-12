import { Injectable } from '@angular/core';

import * as checkout from '../../core/actions/checkout'
import * as cart from '../../core/actions/cart'
import * as fromRoot from '../../reducers';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription, from, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ShopifyService } from './shopify';
import { indexOf } from '../../shared/utils';

import { LineItem } from '../models/lineItem.model';

import * as localForage from "localforage";

@Injectable({
    providedIn: 'root'
})

export class CartService {

  lineItems: LineItem[] = []
  cartId: string;

  constructor(
    private store: Store<fromRoot.State>,
    private shopifyService: ShopifyService,
  ) { }

  storeItems(lineItems) {
    return localForage.setItem('lineItems', JSON.stringify(lineItems))
  }

  clearItems() {
    return new Promise(resolve => {
      this.cartId = null
      this.lineItems = []
      resolve([])
    })
  }

  loadItems() {
    return new Promise(resolve => {
      localForage.getItem('lineItems')
      .then((res: string) => {
        if (res) {
          resolve(res)
        }
      })
    })
  }

  addItem(lineItem: LineItem) {
    return new Promise(resolve => {
      this.lineItems.push(lineItem)
      resolve(this.storeItems(this.lineItems))
    })
  }

  removeItem(lineItem: LineItem) {
    return new Promise(resolve => {
      let newItems = this.removeItemFromArray(lineItem)
      if (newItems) {
        resolve(this.storeItems(newItems))
      }
    })
  }

  removeItemFromArray(lineItem: LineItem) {

      let lineItems = this.lineItems
      let index = indexOf(lineItems, lineItem)

      if (index!=-1) {
          lineItems.splice(index, 1)
          return lineItems
      }
  }

  createUpdateCheckout() {
    this.shopifyService.createCheckout(this.lineItems)
    .then(
      ({model, data}) => {

        if (!data.checkoutCreate.userErrors.length) {
          this.cartId = data.checkoutCreate.checkout.id
          this.openCheckout(data.checkoutCreate.checkout)
          this.store.dispatch(new cart.ClearCart)
        } else {
          data.checkoutCreate.userErrors.forEach(error => {
            this.store.dispatch(new checkout.CreateFail(JSON.stringify(error)))
          })
        }
        
      }
    )
  }

  get total(): number {
    if (this.lineItems.length) return this.lineItems.map(lineItem => lineItem.quantity * (+lineItem.variant.price)).reduce((prev, next) => prev + next);
    else return 0;
  }

  openCheckout(checkout) {
    window.open(checkout.webUrl,'_blank');
  }

}
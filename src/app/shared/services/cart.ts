import { Injectable } from '@angular/core';

import * as cart from '../../core/actions/cart'
import * as fromRoot from '../../reducers';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription, from, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ShopifyService } from './shopify';

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

  addItem(lineItem: LineItem) {
    return new Promise(resolve => {
      if (this.cartId) {
        this.shopifyService.addVariantsToCheckout(this.cartId, [lineItem]).then(
          ({ model, data }) => {
            if (!data.checkoutLineItemsAdd.userErrors.length) {
              this.lineItems.push(lineItem);
              let i = 0;
              data.checkoutLineItemsAdd.checkout.lineItems.edges.forEach(edge => {
                if (edge.node.variant.id = lineItem.variantId) {
                  this.lineItems[i].id = edge.node.id;
                }
                i++;
              });
            } else {
              data.checkoutLineItemsAdd.userErrors.forEach(error => {
                alert(JSON.stringify(error));
              });
            }
          }, err => alert(err)
        )
      } else {
        this.lineItems.push(lineItem)
        resolve(this.storeItems(this.lineItems))
      }
    })
  }

  removeItem(lineItem: LineItem) {
    if (this.cartId) {
      this.shopifyService.removeLineItem(this.cartId, lineItem.id).then(
        ({ model, data }) => {
          if (!data.checkoutLineItemsRemove.userErrors.length) {
            this.removeItemFromArray(lineItem);
          } else {
            data.checkoutLineItemsRemove.userErrors.forEach(error => {
              alert(JSON.stringify(error));
            });
          }
        }, err => alert(err)
      )
    } else {
      this.removeItemFromArray(lineItem);
    }
  }

  removeItemFromArray(lineItem) {

      let lineItems = this.lineItems
      let index = lineItems.indexOf(lineItem);

      if (index!=-1) {
          lineItems.splice(index, 1)
          this.lineItems = lineItems
      }
  }

  createUpdateCheckout() {
    if (!this.cartId) {
      this.shopifyService.createCheckout(this.lineItems).then(
        ({ model, data }) => {
          if (!data.checkoutCreate.userErrors.length) {
            this.cartId = data.checkoutCreate.checkout.id;
            this.openCheckout(data.checkoutCreate.checkout);
            let i = 0;
            data.checkoutCreate.checkout.lineItems.edges.forEach(edge => {
              this.lineItems[i].id = edge.node.id;
              i++;
            });
          } else {
            data.checkoutCreate.userErrors.forEach(error => {
              alert(JSON.stringify(error));
            });
          }
        }, err => alert(err)
      );
    } else {
      this.shopifyService.fetchCheckout(this.cartId).then(
        ({ model, data }) => {
          this.openCheckout(data.checkout);
        }, err => alert(err)
      )
    }
  }

  get total(): number {
    if (this.lineItems.length) return this.lineItems.map(lineItem => lineItem.quantity * (+lineItem.variant.price)).reduce((prev, next) => prev + next);
    else return 0;
  }

  openCheckout(checkout) {
    window.open(checkout.webUrl);
  }

}
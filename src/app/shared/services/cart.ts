import { Injectable } from '@angular/core';
import { ShopifyService } from './shopify';
import { GlobalService } from './global.service';
import { LineItem } from '../models/lineItem.model';

import * as fromRoot from '../../reducers';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CartService {

    

    lineItems: LineItem[];
    cartId: string;
  
    constructor(
      private store: Store<fromRoot.State>,
      private shopifyService: ShopifyService,
      private globalService: GlobalService,
    ) {
  
    }
  
    ngOnInit() {
      // this.globalService.lineItemsObs.subscribe(lineItems => {
      //   if (this.cartId) {
      //     this.updateItemQuantity().then(
      //       quantityUpdated => { if (quantityUpdated) { this.lineItems = lineItems } }, err => alert(err)
      //     )
      //   } else {
      //     this.lineItems = lineItems;
      //   }
      // }
      // )

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

    addItem(lineItem: LineItem) {
      return new Promise(res => {
        if (this.cartId) {
          this.shopifyService.addVariantsToCheckout(this.cartId, [lineItem]).then(
            ({ model, data }) => {
              if (!data.checkoutLineItemsAdd.userErrors.length) {
                res(lineItem);
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
          res(lineItem)
        }
      })
    }

    // removeItem(lineItem: LineItem) {
    //   return new Promise(res => {
    //     if (this.cartId) {
    //       this.shopifyService.removeLineItem(this.cartId, lineItem.id).then(
    //         ({ model, data }) => {
    //           if (!data.checkoutLineItemsRemove.userErrors.length) {
    //             res(this.globalService.removeItem(lineItem))
    //           } else {
    //             data.checkoutLineItemsRemove.userErrors.forEach(error => {
    //               alert(JSON.stringify(error));
    //             });
    //           }
    //         }, err => alert(err)
    //       )
    //     } else {
    //       res(this.globalService.removeItem(lineItem))
    //     }
    //   })
    // }
  
    increaseQuantity(lineItem: LineItem) {
      lineItem.quantity++;
      if (this.cartId) {
        this.updateItemQuantity().then(
          quantityUpdated => {
            if (!quantityUpdated) {
              lineItem.quantity--;
            }
          }, err => alert(err)
        )
      }
    }
  
    decreaseQuantity(lineItem: LineItem) {
      if (lineItem.quantity > 1)
        lineItem.quantity--;
      if (this.cartId) {
        this.updateItemQuantity().then(
          quantityUpdated => {
            if (!quantityUpdated) {
              lineItem.quantity++;
            }
          }, err => alert(err)
        )
      }
    }
  
    updateItemQuantity(): Promise<boolean> {
      return this.shopifyService.updateLineItem(this.cartId, this.lineItems).then(
        ({ model, data }) => {
          if (!data.checkoutLineItemsUpdate.userErrors.length) {
            return true;
          } else {
            data.checkoutLineItemsUpdate.userErrors.forEach(error => {
              alert(JSON.stringify(error));
            });
            return false;
          }
        }, err => false
      )
    }
  
    get total(): number {
      if (this.lineItems.length) return this.lineItems.map(lineItem => lineItem.quantity * (+lineItem.variant.price)).reduce((prev, next) => prev + next);
      else return 0;
    }
  
    openCheckout(checkout) {
      window.open(checkout.webUrl);
    }

}
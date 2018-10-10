import { Injectable } from '@angular/core';

import { Cart } from './../../shared/models/cart.model';
import { LineItem } from './../../shared/models/lineItem.model';

import { BehaviorSubject, Observable } from "rxjs";
import { Store, select } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

import * as fromRoot from '../../reducers/';
import * as cart from '../../core/actions/cart';

@Injectable({
    providedIn: 'root'
})

export class GlobalService {

    cartObs: BehaviorSubject<Cart> = new BehaviorSubject(new Cart);
    lineItemsObs: BehaviorSubject<LineItem[]> = new BehaviorSubject([]);
    newlineItemObs: BehaviorSubject<LineItem> = new BehaviorSubject(null);
    cartOpenCloseObs: BehaviorSubject<boolean> = new BehaviorSubject(true);

    constructor(
        private store: Store<fromRoot.State>,
    ) {
        let cart = new Cart;
        this.cartObs.next(cart);
    }

    get cart() {
        return this.cartObs.getValue();
    }

    set cart(cart) {
        this.cartObs.next(cart);
    }

    get cartOpenClose(){
        return this.cartOpenCloseObs.getValue();
    }

    set cartOpenClose(value: boolean){
        this.cartOpenCloseObs.next(value);
    }

    addItemToCart(lineItem: LineItem) {
        return new Promise(res => {
            this.store.dispatch(new cart.AddItem(lineItem))
        })
    }

    // removeItem(lineItem) {
    //     return new Promise(res => {
    //         this.lineItems$
    //         .pipe(map(payload => payload))
    //         .subscribe((lineItems: LineItem[]) => {
    //             let index = lineItems.indexOf(lineItem);

    //             console.log(lineItems)
        
    //             if (index!=-1) {
    //                 lineItems.splice(index, 1)
    //                 // this.lineItemsObs.next(lineItems);
    //                 this.store.dispatch(new cart.RemoveItemSuccess(lineItems))
    //             }
    //         })
    //     })
    // }
}
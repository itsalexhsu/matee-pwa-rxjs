import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import * as localStorage from 'localforage'

import { Observable, of, from } from 'rxjs';
import { map, catchError, withLatestFrom, switchMap, mergeMap } from 'rxjs/operators';

import { Product, Variant, ShopifyService, LineItem, GlobalService, CartService } from '../../shared';

import * as cart from '../../core/actions/cart'
import * as fromRoot from '../../reducers';

import {
    CartActions,
    CartActionTypes,
    AddItem,
} from '../actions/cart'

@Injectable()
export class CartEffects {

    @Effect()
    addCart$: Observable<Action> = this.actions$.pipe(
        ofType(CartActionTypes.AddItem),
        map((action: cart.AddItem) => action.payload),
        switchMap((payload: LineItem) => 
            from(this.cartService.addItem(payload))
            .pipe(
                map((response: LineItem) => new cart.AddItemSuccess(response)),
                catchError(err => of(new cart.AddItemFail(err)))
            )
        )
    );

    @Effect({ dispatch: false })
    addItemToCart$ = this.actions$.pipe(
        ofType(CartActionTypes.AddItemToCart),
        map((action: cart.AddItem) => action.payload),
        switchMap((payload: LineItem) => 
            from(this.globalService.addItemToCart(payload))
        )
    );

    // @Effect()
    // removeCart$: Observable<Action> = this.actions$.pipe(
    //     ofType(CartActionTypes.RemoveItem),
    //     map((action: cart.RemoveItem) => action.payload),
    //     switchMap((payload: LineItem) => 
    //         from(this.cartService.removeItem(payload))
    //         .pipe(
    //             map((response: LineItem[]) => new cart.RemoveItemSuccess(response)),
    //         )
    //     )
    // );

    constructor(
        private globalService: GlobalService,
        private cartService: CartService,
        private actions$: Actions,
    ) { }

}
import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of, from } from 'rxjs';
import { map, catchError, withLatestFrom, switchMap, mergeMap, tap } from 'rxjs/operators';

import { Product, Variant, ShopifyService, LineItem, CartService } from '../../shared';

import * as cart from '../../core/actions/cart'
import * as fromRoot from '../../reducers';

import * as localForage from "localforage";

import {
    CartActions,
    CartActionTypes,
    AddItem,
    AddItemFail,
    RemoveItem,
    RemoveItemSuccess,
    LoadCartSuccess,
    LoadCartFail,
    UpdateCart,
} from '../actions/cart'

@Injectable()
export class CartEffects {

    @Effect()
    addItem: Observable<Action> = this.actions$.pipe(
        ofType(CartActionTypes.AddItem),
        map((action: AddItem) => action.payload),
        switchMap((lineItem: LineItem) => 
          from(this.cartService.addItem(lineItem))
          .pipe(
            map((res: string) => new UpdateCart(JSON.parse(res))),
            catchError(err => of(new AddItemFail(err)))
          )
        )
    );


    @Effect()
    removeItem: Observable<Action> = this.actions$.pipe(
        ofType(CartActionTypes.RemoveItem),
        map((action: RemoveItem) => action.payload),
        switchMap((lineItem: LineItem) => 
          from(this.cartService.removeItem(lineItem))
          .pipe(
            map((res: string) => new UpdateCart(JSON.parse(res))),
            catchError(err => of(new AddItemFail(err)))
          )
        )
    );

    @Effect()
    loadItems: Observable<Action> = this.actions$.pipe(
      ofType(CartActionTypes.LoadCart),
      switchMap(() =>
        from(this.cartService.loadItems()).pipe(
          map((res: string) => new LoadCartSuccess(JSON.parse(res))),
          catchError(err => of(new LoadCartFail(err)))
        )
      )
    );

    @Effect()
    clearItems: Observable<Action> = this.actions$.pipe(
      ofType(CartActionTypes.ClearCart),
      switchMap(() =>
        from(this.cartService.clearItems()).pipe(
          map((res: any) => new UpdateCart(res)),
          catchError(err => of(new LoadCartFail(err)))
        )
      )
    );

    constructor(
      private store: Store<fromRoot.State>,
      private cartService: CartService,
      private actions$: Actions,
    ) { }

}
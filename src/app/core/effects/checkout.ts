import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of, from } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { ShopifyService, CartService } from '../../shared'

import * as checkout from '../../core/actions/checkout'

import {
    CheckoutActions,
    CheckoutActionTypes
} from '../actions/checkout'

@Injectable()
export class CheckoutEffects {

    @Effect({ dispatch: false })
    createUpdateCheckout$ = this.actions$.pipe(
        ofType(CheckoutActionTypes.CreateUpdate),
        switchMap(() => of(this.cart.createUpdateCheckout())
        )
    );

    constructor(
        private cart: CartService,
        private shopify: ShopifyService,
        private actions$: Actions,
    ) { }

}
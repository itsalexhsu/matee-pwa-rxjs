import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of, from } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { ShopifyService } from '../../shared'

import * as checkout from '../../core/actions/checkout'

import {
    CheckoutActions,
    CheckoutActionTypes
} from '../actions/checkout'

@Injectable()
export class CheckoutEffects {

    @Effect()
    createCheckout$: Observable<Action> = this.actions$.pipe(
        ofType(CheckoutActionTypes.Create),
        switchMap((lineItems) => 
            from(this.shopify.createCheckout(lineItems))
            .pipe(
                map((response: any) => new checkout.CreateSuccess(response)),
                catchError(err => of(new checkout.CreateFail(err)))
            )
        )
    );

    constructor(
        private shopify: ShopifyService,
        private actions$: Actions,
    ) { }

}
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of, from } from 'rxjs';
import { map, catchError, mergeMap, switchMap, tap } from 'rxjs/operators';

import { ShopifyService } from '../../shared/services/shopify'

import { Store } from '@ngrx/store';
import * as product from '../actions/product'
import * as snackbar from '../../core/actions/snackbar'
import * as fromRoot from '../../reducers';

import {
    ProductActionTypes,
    ProductActions,
    ListSuccess,
    ListFail,
    Load,
    LoadSuccess,
    LoadFail,
} from '../actions/product'

@Injectable()
export class ProductsEffects {

    @Effect()
    getProducts$: Observable<Action> = this.actions$.pipe(
        ofType(ProductActionTypes.List),
        switchMap(() => 
            from(this.shopify.getProducts())
            .pipe(
                map((response: any) => new ListSuccess(response)),
                catchError(err => of(new ListFail(err)))
            )
        )
    );

    @Effect()
    getProduct$: Observable<Action> = this.actions$.pipe(
        ofType(ProductActionTypes.Load),
        map((action: Load) => action.payload),
        mergeMap((payload) => 
            from(this.shopify.getProductById(payload))
            .pipe(
                map((response: any) => new LoadSuccess(response)),
                catchError(err => of(new LoadFail(err)))
            )
        )
    );
    
  constructor(
        private shopify: ShopifyService,
        private actions$: Actions,
    ) { }

}
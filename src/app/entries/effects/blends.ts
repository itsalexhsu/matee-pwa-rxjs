import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of, from } from 'rxjs';
import { map, catchError, mergeMap, switchMap, tap } from 'rxjs/operators';

import { ShopifyService } from '../services/shopify'

import { Store } from '@ngrx/store';
import * as blends from '../actions/blends'
import * as snackbar from '../../core/actions/snackbar'
import * as fromRoot from '../../reducers';

import {
    BlendsActionTypes,
    BlendsActions,
    ListSuccess,
    ListFail,
    LoadSuccess,
    LoadFail,
} from '../actions/blends'
import { Load } from '../actions/resource';

@Injectable()
export class BlendsEffects {

    @Effect()
    getBlends$: Observable<Action> = this.actions$.pipe(
        ofType(BlendsActionTypes.List),
        switchMap(() => 
            from(this.shopify.getProducts())
            .pipe(
                map((response: any) => new ListSuccess(response)),
                catchError(err => of(new ListFail(err)))
            )
        )
    );

    @Effect()
    getBlend$: Observable<Action> = this.actions$.pipe(
        ofType(BlendsActionTypes.Load),
        map((action: Load) => action.payload),
        switchMap((payload) => 
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
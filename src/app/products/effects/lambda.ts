import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of, from } from 'rxjs';
import { map, catchError, mergeMap, switchMap, tap } from 'rxjs/operators';

import { LambdaProductService } from '../../shared'

import { Store } from '@ngrx/store';
import * as lambda from '../actions/lambda'

import {
    LambdaProductActionTypes,
    LambdaProductActions,
    Load,
    LoadSuccess,
    LoadFail,
} from '../actions/lambda'

@Injectable()
export class LambdaProductsEffects {

    @Effect()
    getProduct$: Observable<Action> = this.actions$.pipe(
        ofType(LambdaProductActionTypes.Load),
        map((action: Load) => action.payload),
        mergeMap((payload) => 
            from(this.lambda.getProduct(payload))
            .pipe(
                map((response: any) => new LoadSuccess(response)),
                catchError(err => of(new LoadFail(err)))
            )
        )
    );
    
  constructor(
        private lambda: LambdaProductService,
        private actions$: Actions,
    ) { }

}
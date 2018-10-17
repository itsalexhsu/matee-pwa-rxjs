import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of, from } from 'rxjs';
import { map, catchError, mergeMap, switchMap, tap } from 'rxjs/operators';

import { LambdaProductService } from '../../shared'

import { Store } from '@ngrx/store';
import * as ingredient from '../actions/ingredient'

import {
    IngredientActionTypes,
    IngredientActions,
    Load,
    LoadSuccess,
    LoadFail,
} from '../actions/ingredient'

@Injectable()
export class IngredientEffects {

    @Effect()
    getIngredients$: Observable<Action> = this.actions$.pipe(
        ofType(IngredientActionTypes.Load),
        mergeMap((payload) => 
            from(this.lambda.getIngredients())
            .pipe(
                map((response: any) => new LoadSuccess(response)),
                catchError(err => of(new LoadFail(err)))
            )
        ),
    );
    
  constructor(
        private lambda: LambdaProductService,
        private actions$: Actions,
    ) { }

}
import { Injectable } from '@angular/core';

import { from } from 'rxjs';
import { map, exhaustMap, tap } from 'rxjs/operators';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { CognitoService } from "../services/cognito";

import {
    AuthActionTypes
} from '../actions/auth'

@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  getUser$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoadUser),
    tap(() => this.cognito.getParameters())
  );
  
  constructor(
    private cognito: CognitoService,
    private actions$: Actions,
  ) { }
}
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Store } from '@ngrx/store';
import { map, tap, delay } from 'rxjs/operators';

import { Effect, Actions, ofType } from '@ngrx/effects';

import * as snackbar from '../../core/actions/snackbar'
import * as fromRoot from '../../reducers';

import { SnackbarRequest } from "../models/snackbar.model";

import {
    ShowSnackbar,
    SnackbarActions,
    SnackbarActionTypes
} from '../actions/snackbar'

@Injectable()
export class SnackbarEffects {

  @Effect({ dispatch: false })
  show = this.actions$.pipe(
    ofType(SnackbarActionTypes.ShowSnackbar),
    map((action: ShowSnackbar) => action.payload),
    tap((payload: SnackbarRequest) => this.snack.open(payload.message)),
    delay(2000),
    map(() => this.store.dispatch(new snackbar.HideSnackbar))
  );

  @Effect({ dispatch: false })
  close = this.actions$.pipe(
      ofType(SnackbarActionTypes.HideSnackbar),
      tap(() => this.snack.dismiss())
  )

  constructor(
    private snack: MatSnackBar,
    private actions$: Actions,
    private store: Store<fromRoot.State>,
) { }
}
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { tap, map, mergeMap } from 'rxjs/operators';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { from } from '../../../../node_modules/rxjs';

import { PouchdbService } from "../services/pouchdb";

import * as fromRoot from '../../reducers';
import * as resource from '../../entries/actions/resource'

import {
    PouchDbActions,
    PouchDbActionTypes,
    SyncDB,
} from '../actions/pouchdb'

@Injectable()
export class PouchDbEffects {

  @Effect({dispatch: false})
  syncDB$ = this.actions$.pipe(
    ofType(PouchDbActionTypes.SyncDB),
    tap(() => from(this.pouchDB.sync()))
  )

  @Effect({dispatch: false})
  syncDBChange$ = this.actions$.pipe(
    ofType(PouchDbActionTypes.SyncDBChange),
    tap(() => this.store.dispatch(new resource.LoadAll()))
  )

  @Effect({dispatch: false})
  syncDBCancel$ = this.actions$.pipe(
    ofType(PouchDbActionTypes.SyncDBCancel),
    tap(() => from(this.pouchDB.cancel()))
  )

  @Effect({dispatch: false})
  replicateTo$ = this.actions$.pipe(
    ofType(PouchDbActionTypes.SyncDB),
    tap(() => from(this.pouchDB.replicateTo()))
  )

  @Effect({dispatch: false})
  destroyDB = this.actions$.pipe(
    ofType(PouchDbActionTypes.DestroyDB),
    tap(() => from(this.pouchDB.destroy()))
  )

  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.State>,
    private pouchDB: PouchdbService,
  ) { }

}
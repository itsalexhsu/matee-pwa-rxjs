import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of, from } from 'rxjs';
import { map, catchError, mergeMap, tap, toArray } from 'rxjs/operators';

import * as localStorage from 'localforage'

import { Store } from '@ngrx/store';

import * as pouchDB from '../../core/actions/pouchdb';
import * as resource from '../actions/resource';
import * as fromRoot from '../../reducers';

import { PouchdbService } from '../../core/services/pouchdb';

import { Resource } from '../models/resource.model';

import {
  Create,
  CreateFail,
  CreateSuccess,
  Load,
  LoadFail,
  LoadSuccess,
  ResourceActionTypes,
  LoadAllFail,
  LoadAllSuccess,
  ClearSuccess,
  ClearFail,
  Archive,
  ArchiveSuccess,
  ArchiveFail,
} from '../actions/resource'

@Injectable()
export class ResourceEffects {

  @Effect({ dispatch: false })
  create$ = this.actions$.pipe(
    ofType(ResourceActionTypes.Create),
    map((action: Create) => action.payload),
    mergeMap((payload: any) => this.pouchDb.put(payload.id, payload.resource))
  );

  @Effect()
  createSuccess$ = this.actions$.pipe(
    ofType(ResourceActionTypes.CreateSuccess),
    mergeMap(() => 
      from(localStorage.removeItem('temporary-resource')).pipe(
        map(() => new ClearSuccess()),
        catchError(() => of(new ClearFail()))
      )
    )
  );

  //Load Effects

  @Effect()
  get$: Observable<Action> = this.actions$.pipe(
    ofType(ResourceActionTypes.Load),
    map((action: Load) => action.payload),
    mergeMap(id =>
      from(this.pouchDb.get(id)).pipe(
        map((resource: any) => new LoadSuccess(resource)),
        catchError(() => of(new LoadFail(id)))
      )
    )
  );

  @Effect()
  loadAll: Observable<Action> = this.actions$.pipe(
    ofType(ResourceActionTypes.LoadAll),
    map((action: Create) => action.payload),
    mergeMap(request =>
      from(this.pouchDb.fetch()).pipe(
        map((res: any) => res.rows),
        mergeMap(rows => rows),
        map((rows: any) => rows.doc),
        toArray(),
        map(arrayDocs => new LoadAllSuccess(arrayDocs)),
        catchError((err) => of(new LoadAllFail(err)))
      )
    )
  );

  // Archive Effects

  @Effect()
  archive$ = this.actions$.pipe(
    ofType(ResourceActionTypes.Archive),
    map((action: Archive) => action.payload),
    mergeMap(id => 
    from(this.pouchDb.get(id)).pipe(
      map((resource: any) => resource),
      mergeMap((resource: Resource) =>
      from(this.pouchDb.put(id, Object.assign({}, resource, {status: 'archived'}))).pipe(
        map(() => new ArchiveSuccess()),
        catchError(err => of(new ArchiveFail(err)))
      ))
    ))
  )

  @Effect({ dispatch: false })
  archiveSuccess$ = this.actions$.pipe(
    ofType(ResourceActionTypes.ArchiveSuccess),
    tap(() => {
      this.store.dispatch(new pouchDB.ReplicateTo())
      this.router.navigate(['/'])
    })
  );

  // Clear Effects

  @Effect({ dispatch: false })
  clearSuccess$ = this.actions$.pipe(
    ofType(ResourceActionTypes.ClearSuccess),
    tap(() => {
      this.store.dispatch(new pouchDB.ReplicateTo())
      this.router.navigate(['/'])
    })
  );

  
  constructor(
    private store: Store<fromRoot.State>,
    private actions$: Actions,
    private router: Router,
    private pouchDb: PouchdbService,
  ) { }
}
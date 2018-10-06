import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, defer, of, from } from 'rxjs';
import { tap, switchMap, map, catchError } from 'rxjs/operators';

import {
  EntryActions,
  EntryActionTypes,
  AddResource,
  AddResourceSuccess,
  AddResourceFail,
  CreateEntry,
  CreateEntryFail,
  CreateEntrySuccess,
  RemoveEntry,
  RemoveEntryFail,
  RemoveEntrySuccess,
  Load,
  LoadFail,
  LoadSuccess,
} from '../actions/entry'

import PouchDB from 'pouchdb-browser';
const db = new PouchDB("local")

@Injectable()
export class EntryEffects {

  @Effect()
  loadEntries$: Observable<Action> = this.actions$.pipe(
    ofType(EntryActionTypes.Load),
    switchMap(() => 
      from(db.allDocs({include_docs: true, descending: false}))
        .pipe(
            map((entries: any) => new LoadSuccess(entries.rows.map(entry => entry.doc))),
            catchError(error => of(new LoadFail(error)))
        )
      )
  );
  
  constructor(
    private actions$: Actions,
    private router: Router
  ) { }
}
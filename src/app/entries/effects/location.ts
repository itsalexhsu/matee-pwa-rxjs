import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of, from } from 'rxjs';
import { map, catchError, mergeMap, switchMap, tap } from 'rxjs/operators';

import { LocationRequest } from "../models/resource.model";

import { PlacesService } from "../services/places";

import { Store } from '@ngrx/store';
import * as location from '../actions/location'
import * as snackbar from '../../core/actions/snackbar'
import * as fromRoot from '../../reducers';

import {
    SearchNearby,
    Search,
    SearchFail,
    SearchSuccess,
    GetUserCoordFail,
    LocationActionTypes,
    LocationActions
} from '../actions/location'

@Injectable()
export class LocationEffects {

@Effect({ dispatch: false })
getUserCoord$ = this.actions$.pipe(
    ofType(LocationActionTypes.GetUserCoord),
    tap(() => {
    navigator.geolocation.getCurrentPosition(
        position => {this.store.dispatch(new location.GetUserCoordSuccess(position)),
        err => {this.store.dispatch(new location.GetUserCoordFail(err))}
        })
    })
);

@Effect({ dispatch: false })
getUserCoordFail$ = this.actions$.pipe(
  ofType(LocationActionTypes.GetUserCoordFail),
  tap(() => {
    this.store.dispatch(new snackbar.ShowSnackbar({message: 'Could not get your current location', action: 'Close'}))
  })
);

@Effect()
search: Observable<Action> = this.actions$.pipe(
  ofType(LocationActionTypes.Search),
  map((action: Search) => action.payload),
  mergeMap((request: LocationRequest) =>
      from(this.places.searchByText(request)).pipe(
          map((response: any) => new SearchSuccess(JSON.parse(response).results)),
          catchError(err => of(new SearchFail(err)))
      )
  )
);

  @Effect()
  searchNearby: Observable<Action> = this.actions$.pipe(
    ofType(LocationActionTypes.SearchNearby),
    map((action: SearchNearby) => action.payload),
    switchMap((request: LocationRequest) =>
        from(this.places.searchNearby(request)).pipe(
            map((response: any) => new SearchSuccess(JSON.parse(response).results)),
            catchError(err => of(new SearchFail(err)))
        )
    ));
    
  constructor(
        private places: PlacesService,
        private actions$: Actions,
        private router: Router,
        private store: Store<fromRoot.State>,
    ) { }

}
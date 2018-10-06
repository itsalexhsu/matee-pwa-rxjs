import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
import { RouterStateUrl } from '../shared/utils';
import * as fromRouter from '@ngrx/router-store';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

import * as fromCartButton from '../core/reducers/cart-button';
import * as fromLayout from '../core/reducers/layout';
import * as fromSnackbar from '../core/reducers/snackbar';
import * as fromPouchdb from '../core/reducers/pouchdb';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  cartButton: fromCartButton.State;
  layout: fromLayout.State;
  snackbar: fromSnackbar.State;
  pouchdb: fromPouchdb.State;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  cartButton: fromCartButton.reducer,
  layout: fromLayout.reducer,
  snackbar: fromSnackbar.reducer,
  pouchdb: fromPouchdb.reducer,
  router: fromRouter.routerReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

// Sync reducer to localstorage
export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({
    keys: [{auth: ['login'] }, 'router'],
    rehydrate: true
  })(reducer);
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze, localStorageSyncReducer]
  : [localStorageSyncReducer];

/**
 * Layout Reducers
 */

export const getCartButtonState = createFeatureSelector<fromCartButton.State>('cartButton');

export const getCartButton = createSelector(
  getCartButtonState,
  fromCartButton.getShowButton
);

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowFooter = createSelector(
  getLayoutState,
  fromLayout.getShowFooter
);

export const getSnackbarState = createFeatureSelector<fromSnackbar.State>('snackbar');

export const getShowSnackbar = createSelector(
  getSnackbarState,
  fromSnackbar.getShowSnackbar
);

export const getPouchdbState = createFeatureSelector<fromPouchdb.State>('pouchdb');

export const getPouchDBDestroyed = createSelector(
  getPouchdbState,
  fromPouchdb.getDBDestroyed
);



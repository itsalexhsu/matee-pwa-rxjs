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

import * as fromCheckout from '../core/reducers/checkout';
import * as fromCart from '../core/reducers/cart';
import * as fromLayout from '../core/reducers/layout';
import * as fromSnackbar from '../core/reducers/snackbar';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  checkout: fromCheckout.State;
  cart: fromCart.State;
  layout: fromLayout.State;
  snackbar: fromSnackbar.State;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  checkout: fromCheckout.reducer,
  cart: fromCart.reducer,
  layout: fromLayout.reducer,
  snackbar: fromSnackbar.reducer,
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
 * Checkout Reducers
 */

export const getCheckoutState = createFeatureSelector<fromCheckout.State>('checkout');

export const getCheckoutLink = createSelector(
  getCheckoutState,
  fromCheckout.getCheckoutLink
);

/**
 * Cart Reducers
 */

export const getCartState = createFeatureSelector<fromCart.State>('cart');

export const getNewLineItem = createSelector(
  getCartState,
  fromCart.getNewLineItem
);

export const getRemovedItem = createSelector(
  getCartState,
  fromCart.getRemovedItem
);

export const getLineItems = createSelector(
  getCartState,
  fromCart.getLineItems
);


/**
 * Layout Reducers
 */

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getAddItemButton = createSelector(
  getLayoutState,
  fromLayout.getAddItemButton
);

export const getShowCartButton = createSelector(
  getLayoutState,
  fromLayout.getShowCartButton
);

export const getShowCheckoutButton = createSelector(
  getLayoutState,
  fromLayout.getShowCheckoutButton
);

export const getShowFooter = createSelector(
  getLayoutState,
  fromLayout.getShowFooter
);

export const getSnackbarState = createFeatureSelector<fromSnackbar.State>('snackbar');

export const getShowSnackbar = createSelector(
  getSnackbarState,
  fromSnackbar.getShowSnackbar
);
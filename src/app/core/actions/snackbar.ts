import { Action } from '@ngrx/store';

export enum SnackbarActionTypes {
  ShowSnackbar = '[Snackbar] Show Snackbar',
  HideSnackbar = '[Snackbar] Hide Snackbar',
}

export class ShowSnackbar implements Action {
  readonly type = SnackbarActionTypes.ShowSnackbar;

  constructor(public payload: {message: string, action: string}) {}
}

export class HideSnackbar implements Action {
  readonly type = SnackbarActionTypes.HideSnackbar;
}

export type SnackbarActions = ShowSnackbar | HideSnackbar;

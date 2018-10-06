import { Action } from '@ngrx/store';

export enum BlendsActionTypes {
  Load = '[Blends] Load',
  LoadSuccess = '[Blends] Load Success',
  LoadFail = '[Blends] Load Fail',
}

/**
 * Load Collection Actions
 */
export class Load implements Action {
  readonly type = BlendsActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = BlendsActionTypes.LoadSuccess;

  constructor(public payload: any[]) {}
}

export class LoadFail implements Action {
  readonly type = BlendsActionTypes.LoadFail;

  constructor(public payload: any) {}
}

export type BlendsActions =
  | Load
  | LoadSuccess
  | LoadFail;

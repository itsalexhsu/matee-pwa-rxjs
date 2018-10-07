import { Action } from '@ngrx/store';

export enum BlendsActionTypes {
  Load = '[Blends] Load',
  LoadSuccess = '[Blends] Load Success',
  LoadFail = '[Blends] Load Fail',
  List = '[Blends] Load List',
  ListSuccess = '[Blends] Load List Success',
  ListFail = '[Blends] Load List Fail',
}

/**
 * Load Blend Actions
 */
export class Load implements Action {
  readonly type = BlendsActionTypes.Load;

  constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
  readonly type = BlendsActionTypes.LoadSuccess;

  constructor(public payload: any[]) {}
}

export class LoadFail implements Action {
  readonly type = BlendsActionTypes.LoadFail;

  constructor(public payload: any) {}
}

/**
 * Load Blend List Actions
 */
export class List implements Action {
  readonly type = BlendsActionTypes.List;
}

export class ListSuccess implements Action {
  readonly type = BlendsActionTypes.ListSuccess;

  constructor(public payload: any[]) {}
}

export class ListFail implements Action {
  readonly type = BlendsActionTypes.ListFail;

  constructor(public payload: any) {}
}

export type BlendsActions =
  | Load
  | LoadSuccess
  | LoadFail
  | List
  | ListSuccess
  | ListFail;

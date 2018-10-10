import { Action } from '@ngrx/store';

export enum CheckoutActionTypes {
  Load = '[Checkout] Load',
  LoadSuccess = '[Checkout] Load Success',
  LoadFail = '[Checkout] Load Fail',
  Create = '[Checkout] Create',
  CreateSuccess = '[Checkout] Create Success',
  CreateFail = '[Checkout] Create Fail',
}

/**
 * Load Checkout Actions
 */
export class Load implements Action {
  readonly type = CheckoutActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = CheckoutActionTypes.LoadSuccess;

  constructor(public payload: any[]) {}
}

export class LoadFail implements Action {
  readonly type = CheckoutActionTypes.LoadFail;

  constructor(public payload: any) {}
}

/**
 * Create Checkout Actions
 */
export class Create implements Action {
  readonly type = CheckoutActionTypes.Create;

  constructor(public payload: string) {}
}

export class CreateSuccess implements Action {
  readonly type = CheckoutActionTypes.CreateSuccess;

  constructor(public payload: any[]) {}
}

export class CreateFail implements Action {
  readonly type = CheckoutActionTypes.CreateFail;

  constructor(public payload: any) {}
}

export type CheckoutActions =
  | Load
  | LoadSuccess
  | LoadFail
  | Create
  | CreateSuccess
  | CreateFail
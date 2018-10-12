import { Action } from '@ngrx/store';

export enum CheckoutActionTypes {
  Open = '[Checkout] Open',
  CreateUpdate = '[Checkout] Create or Update',
  CreateSuccess = '[Checkout] Create Success',
  CreateFail = '[Checkout] Create Fail',
}

export class Open implements Action {
  readonly type = CheckoutActionTypes.Open;

  constructor(public payload: string) {}
}

/**
 * Create Checkout Actions
 */
export class CreateUpdate implements Action {
  readonly type = CheckoutActionTypes.CreateUpdate;
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
  | Open
  | CreateUpdate
  | CreateSuccess
  | CreateFail
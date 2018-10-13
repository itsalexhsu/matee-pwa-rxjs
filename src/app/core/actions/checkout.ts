import { Action } from '@ngrx/store';

export enum CheckoutActionTypes {
  CreateUpdate = '[Checkout] Create or Update',
  CreateSuccess = '[Checkout] Create Success',
  CreateFail = '[Checkout] Create Fail',
}

/**
 * Create Checkout Actions
 */
export class CreateUpdate implements Action {
  readonly type = CheckoutActionTypes.CreateUpdate;
}

export class CreateSuccess implements Action {
  readonly type = CheckoutActionTypes.CreateSuccess;

  constructor(public payload: string) {}
}

export class CreateFail implements Action {
  readonly type = CheckoutActionTypes.CreateFail;

  constructor(public payload: any) {}
}

export type CheckoutActions =
  | CreateUpdate
  | CreateSuccess
  | CreateFail
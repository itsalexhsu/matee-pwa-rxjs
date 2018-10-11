import { Action } from '@ngrx/store';
import { Product, Variant } from 'src/app/shared';

export enum ProductActionTypes {
  Load = '[Product] Load',
  LoadSuccess = '[Product] Load Success',
  LoadFail = '[Product] Load Fail',
  List = '[Product] Load List',
  ListSuccess = '[Product] Load List Success',
  ListFail = '[Product] Load List Fail',
  SelectVariant = '[Product] Variant Selected',
}

/**
 * Load Product Actions
 */
export class Load implements Action {
  readonly type = ProductActionTypes.Load;

  constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;

  constructor(public payload: Product) {}
}

export class LoadFail implements Action {
  readonly type = ProductActionTypes.LoadFail;

  constructor(public payload: any) {}
}

/**
 * Load Blend List Actions
 */
export class List implements Action {
  readonly type = ProductActionTypes.List;
}

export class ListSuccess implements Action {
  readonly type = ProductActionTypes.ListSuccess;

  constructor(public payload: Product[]) {}
}

export class ListFail implements Action {
  readonly type = ProductActionTypes.ListFail;

  constructor(public payload: any) {}
}

/**
 * Variant Actions
 */
export class SelectVariant implements Action {
  readonly type = ProductActionTypes.SelectVariant;

  constructor(public payload: Variant) {}
}


export type ProductActions =
  | Load
  | LoadSuccess
  | LoadFail
  | List
  | ListSuccess
  | ListFail;

import { Action } from '@ngrx/store';
import { LambdaProductService } from 'src/app/shared';

export enum LambdaProductActionTypes {
  Load = '[Lambda Product] Load',
  LoadSuccess = '[Lambda Product] Load Success',
  LoadFail = '[Lambda Product] Load Fail',
}

/**
 * Load Product Actions
 */
export class Load implements Action {
  readonly type = LambdaProductActionTypes.Load;

  constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
  readonly type = LambdaProductActionTypes.LoadSuccess;

  constructor(public payload: any) {}
}

export class LoadFail implements Action {
  readonly type = LambdaProductActionTypes.LoadFail;

  constructor(public payload: any) {}
}


export type LambdaProductActions =
  | Load
  | LoadSuccess
  | LoadFail
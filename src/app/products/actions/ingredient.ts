import { Action } from '@ngrx/store';
import { LambdaProductService } from 'src/app/shared';

export enum IngredientActionTypes {
  Load = '[Ingredient] Load Ingredients',
  LoadSuccess = '[Ingredient] Load Ingredients Success',
  LoadFail = '[Ingredient] Load Ingredients Fail',
  SelectIngredients = '[Ingredient] Select Ingredients',
}

/**
 * Load Ingredients Actions
 */
export class Load implements Action {
  readonly type = IngredientActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = IngredientActionTypes.LoadSuccess;

  constructor(public payload: any) {}
}

export class LoadFail implements Action {
  readonly type = IngredientActionTypes.LoadFail;

  constructor(public payload: any) {}
}

/**
 * Load Product Actions
 */
export class SelectIngredients implements Action {
  readonly type = IngredientActionTypes.SelectIngredients;

  constructor(public payload: any) {}
}

export type IngredientActions =
  | Load
  | LoadSuccess
  | LoadFail
  | SelectIngredients
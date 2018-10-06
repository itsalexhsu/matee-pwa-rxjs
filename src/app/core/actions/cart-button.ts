import { Action } from '@ngrx/store';

export enum CartButtonActionTypes {
  ShowButton = '[Cart Button] Show Button',
  HideButton = '[Cart Button] Hide Button',
}

export class ShowButton implements Action {
  readonly type = CartButtonActionTypes.ShowButton;
}

export class HideButton implements Action {
  readonly type = CartButtonActionTypes.HideButton;
}

export type CartButtonActions = ShowButton | HideButton;

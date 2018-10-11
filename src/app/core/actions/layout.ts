import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  ShowAddItemButton = '[layout] Show Add Item Button',
  HideAddItemButton = '[layout] Hide Add Item Button',
  ShowCartButton = '[layout] Show Cart Button',
  HideCartButton = '[layout] Hide Cart Button',
  ShowCheckoutButton = '[layout] Show Checkout Button',
  HideCheckoutButton = '[layout] Hide Checkout Button',
  ShowFooter = '[Layout] Show Footer',
  HideFooter = '[Layout] Hide Footer',
}

/* Add Item Button Actions */

export class ShowAddItemButton implements Action {
  readonly type = LayoutActionTypes.ShowAddItemButton;
}

export class HideAddItemButton implements Action {
  readonly type = LayoutActionTypes.HideAddItemButton;
}

/* Cart Button Actions */

export class ShowCartButton implements Action {
  readonly type = LayoutActionTypes.ShowCartButton;
}

export class HideCartButton implements Action {
  readonly type = LayoutActionTypes.HideCartButton;
}

/* Checkout Button Actions */

export class ShowCheckoutButton implements Action {
  readonly type = LayoutActionTypes.ShowCheckoutButton;
}

export class HideCheckoutButton implements Action {
  readonly type = LayoutActionTypes.HideCheckoutButton;
}

/* Footer Actions */

export class ShowFooter implements Action {
  readonly type = LayoutActionTypes.ShowFooter;
}

export class HideFooter implements Action {
  readonly type = LayoutActionTypes.HideFooter;
}

export type LayoutActions =
  | ShowAddItemButton
  | HideAddItemButton
  | ShowCartButton
  | HideCartButton
  | ShowCheckoutButton
  | HideCheckoutButton
  | ShowFooter
  | HideFooter;

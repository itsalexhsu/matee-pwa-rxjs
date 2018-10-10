import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  showAddItemButton = '[layout] Show Add Item Button',
  hideAddItemButton = '[layout] Hide Add Item Button',
  showCartButton = '[layout] Show Cart Button',
  hideCartButton = '[layout] Hide Cart Button',
  showCheckoutButton = '[layout] Show Checkout Button',
  hideCheckoutButton = '[layout] Show Checkout Button',
  ShowFooter = '[Layout] Show Footer',
  HideFooter = '[Layout] Hide Footer',
}

/* Add Item Button Actions */

export class showAddItemButton implements Action {
  readonly type = LayoutActionTypes.showAddItemButton;
}

export class hideAddItemButton implements Action {
  readonly type = LayoutActionTypes.hideAddItemButton;
}

/* Cart Button Actions */

export class showCartButton implements Action {
  readonly type = LayoutActionTypes.showCartButton;
}

export class hideCartButton implements Action {
  readonly type = LayoutActionTypes.hideCartButton;
}

/* Checkout Button Actions */

export class showCheckoutButton implements Action {
  readonly type = LayoutActionTypes.showCheckoutButton;
}

export class hideCheckoutButton implements Action {
  readonly type = LayoutActionTypes.hideCheckoutButton;
}

/* Footer Actions */

export class ShowFooter implements Action {
  readonly type = LayoutActionTypes.ShowFooter;
}

export class HideFooter implements Action {
  readonly type = LayoutActionTypes.HideFooter;
}

export type LayoutActions =
  | showAddItemButton
  | hideAddItemButton
  | showCartButton
  | hideCartButton
  | showCheckoutButton
  | hideCheckoutButton
  | ShowFooter
  | HideFooter;

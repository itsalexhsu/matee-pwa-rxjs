import { Action } from '@ngrx/store';
import { LineItem } from 'src/app/shared';

export enum CartActionTypes {
    LoadCart = '[Cart] Load Cart',
    LoadCartSuccess = '[Cart] Load Cart Success',
    LoadCartFail = '[Cart] Load Cart Fail',
    AddItem = '[Cart] Add Item',
    // AddItemSuccess = '[Cart] Add Item Success',
    AddItemFail = '[Cart] Add Item Fail',
    RemoveItem = '[Cart] Remove Item',
    RemoveItemSuccess = '[Cart] Remove Item Success',
    UpdateItemQuantity = '[Cart] Update Quantity',
    ClearCart = '[Cart] Clear Cart',
    UpdateCart = '[Cart] Update Cart',
}

/**
 * Load Cart Actions
 */
export class LoadCart implements Action {
  readonly type = CartActionTypes.LoadCart;
}

export class LoadCartSuccess implements Action {
  readonly type = CartActionTypes.LoadCartSuccess;

  constructor(public payload: LineItem[]) {}
}

export class LoadCartFail implements Action {
  readonly type = CartActionTypes.LoadCartFail;

  constructor(public payload: any) {}
}

// /**
//  * Add Item Actions
//  */
// export class AddItemToCart implements Action {
//   readonly type = CartActionTypes.AddItemToCart;

//   constructor(public payload: LineItem) {}
// }

// export class AddItemToCartSuccess implements Action {
//   readonly type = CartActionTypes.AddItemToCartSuccess;

//   constructor(public payload: LineItem[]) {}
// }

// export class AddItemToCartFail implements Action {
//   readonly type = CartActionTypes.AddItemToCartFail;

//   constructor(public payload: any) {}
// }

/**
 * Add Item Actions
 */
export class AddItem implements Action {
  readonly type = CartActionTypes.AddItem;

  constructor(public payload: LineItem) {}
}

// export class AddItemSuccess implements Action {
//   readonly type = CartActionTypes.AddItemSuccess;
// }

export class AddItemFail implements Action {
  readonly type = CartActionTypes.AddItemFail;

  constructor(public payload: any) {}
}

/**
 * Remove Item Actions
 */
export class RemoveItem implements Action {
  readonly type = CartActionTypes.RemoveItem;

  constructor(public payload: LineItem) {}
}

export class RemoveItemSuccess implements Action {
  readonly type = CartActionTypes.RemoveItemSuccess;

  constructor(public payload: LineItem[]) {}
}

/**
 * Update Cart Actions
 */
export class UpdateCart implements Action {
  readonly type = CartActionTypes.UpdateCart;

  constructor(public payload: LineItem[]) {}
}

/**
 * Clear Cart Actions
 */
export class ClearCart implements Action {
  readonly type = CartActionTypes.ClearCart;
}


export type CartActions =
  | LoadCart
  | LoadCartSuccess
  | LoadCartFail
  | AddItem
  | AddItemFail
  | RemoveItem
  | RemoveItemSuccess
  | UpdateCart
  | ClearCart
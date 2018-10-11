import { Action } from '@ngrx/store';
import { LineItem } from 'src/app/shared';

export enum CartActionTypes {
    Open = '[Cart] Open',
    Close = '[Cart] Close',
    LoadCart = '[Cart] Load Item',
    LoadCartSuccess = '[Cart] Load Success',
    LoadCartFail = '[Cart] Load Fail',
    // AddItemToCart = '[Cart] Add Item To Cart',
    // AddItemToCartSuccess = '[Cart] Add Item Success To Cart',
    // AddItemToCartFail = '[Cart] Add Item Fail To Cart',
    AddItem = '[Cart] Add Item',
    // AddItemSuccess = '[Cart] Add Item Success',
    AddItemFail = '[Cart] Add Item Fail',
    RemoveItem = '[Cart] Remove Item',
    RemoveItemSuccess = '[Cart] Remove Item Success',
    UpdateItemQuantity = '[Cart] Update Quantity',
    UpdateCart = '[Cart] Update Cart',
    UpdateCartSuccess = '[Cart] Update Cart Success',
    UpdateCartFail = '[Cart] Update Cart Fail',
}

/**
 * Open Close Cart Actions
 */
export class Open implements Action {
  readonly type = CartActionTypes.Open;
}

export class Close implements Action {
  readonly type = CartActionTypes.Close;
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

//   constructor(public payload: LineItem) {}
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

  constructor(public payload: LineItem) {}
}

export class UpdateCartSuccess implements Action {
  readonly type = CartActionTypes.UpdateCartSuccess;
}

export class UpdateCartFail implements Action {
  readonly type = CartActionTypes.UpdateCartFail;

  constructor(public payload: any) {}
}

export type CartActions =
  | Open
  | Close
  | LoadCart
  | LoadCartSuccess
  | LoadCartFail
  // | AddItemToCart
  // | AddItemToCartSuccess
  // | AddItemToCartFail
  | AddItem
  // | AddItemSuccess
  | AddItemFail
  | RemoveItem
  | RemoveItemSuccess
  | UpdateCart
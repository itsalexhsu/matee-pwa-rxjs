import { CartActionTypes, CartActions } from '../actions/cart';
import { LineItem } from 'src/app/shared';

export interface State {
    newLineItem: LineItem;
    removedLineItem: LineItem;
    lineItems: LineItem[];
    showCart: boolean;
}

const initialState: State = {
    newLineItem: null,
    removedLineItem: null,
    lineItems: [],
    showCart: false,
};

export function reducer(
  state: State = initialState,
  action: CartActions
): State {
  switch (action.type) {

    case CartActionTypes.AddItemSuccess:
        return {
        ...state,
        newLineItem: action.payload,
    };

    case CartActionTypes.AddItemToCartSuccess:
        return {
        ...state,
        lineItems: action.payload,
    };

    case CartActionTypes.RemoveItem:
        return {
        ...state,
        removedLineItem: action.payload,
    };

    case CartActionTypes.Open:
        return {
        ...state,
        showCart: true,
    };

    case CartActionTypes.Close:
        return {
        ...state,
        showCart: false,
    };

    default:
      return state;
  }
}

export const getNewLineItem = (state: State) => state.newLineItem;
export const getRemovedItem = (state: State) => state.removedLineItem;
export const getShowCart = (state: State) => state.showCart;
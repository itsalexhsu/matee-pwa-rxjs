import { CartActionTypes, CartActions } from '../actions/cart';
import { LineItem } from 'src/app/shared';

export interface State {
    newLineItem: LineItem;
    removedLineItem: LineItem;
    lineItems: LineItem[];
}

const initialState: State = {
    newLineItem: null,
    removedLineItem: null,
    lineItems: [],
};

export function reducer(
  state: State = initialState,
  action: CartActions
): State {
  switch (action.type) {

    case CartActionTypes.UpdateCart:
        return {
        ...state,
        lineItems: action.payload,
    };

    case CartActionTypes.LoadCartSuccess:
        return {
        ...state,
        lineItems: action.payload,
    };

    case CartActionTypes.RemoveItem:
        return {
        ...state,
        removedLineItem: action.payload,
    };

    default:
      return state;
  }
}

export const getNewLineItem = (state: State) => state.newLineItem;
export const getRemovedItem = (state: State) => state.removedLineItem;
export const getLineItems = (state: State) => state.lineItems;
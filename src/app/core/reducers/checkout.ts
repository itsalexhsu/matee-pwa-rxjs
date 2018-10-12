import { CheckoutActionTypes, CheckoutActions } from '../actions/checkout';

export interface State {
    checkoutLink: string,
}

const initialState: State = {
    checkoutLink: null,
};

export function reducer(
  state: State = initialState,
  action: CheckoutActions
): State {
  switch (action.type) {

    case CheckoutActionTypes.Open:
        return {
        ...state,
        checkoutLink: action.payload,
    };

    default:
      return state;
  }
}

export const getCheckoutLink = (state: State) => state.checkoutLink;
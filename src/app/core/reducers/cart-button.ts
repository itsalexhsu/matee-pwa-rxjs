import { CartButtonActionTypes, CartButtonActions } from '../actions/cart-button';

export interface State {
  showButton: boolean;
}

const initialState: State = {
  showButton: false,
};

export function reducer(
  state: State = initialState,
  action: CartButtonActions
): State {
  switch (action.type) {
    case CartButtonActionTypes.HideButton:
      return {
        showButton: false,
      };

    case CartButtonActionTypes.ShowButton:
      return {
        showButton: true,
      };

    default:
      return state;
  }
}

export const getShowButton = (state: State) => state.showButton;

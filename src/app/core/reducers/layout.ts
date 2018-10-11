import { LayoutActionTypes, LayoutActions } from '../actions/layout';

export interface State {
  showCartButton: boolean;
  showAddItemButton: boolean;
  showCheckoutButton: boolean
  showFooter: boolean;
}

const initialState: State = {
  showCartButton: false,
  showAddItemButton: false,
  showCheckoutButton: false,
  showFooter: false,
};

export function reducer(
  state: State = initialState,
  action: LayoutActions
): State {
  switch (action.type) {

    case LayoutActionTypes.ShowCartButton:
        return {
        ...state,
        showCartButton: true,
    };

    case LayoutActionTypes.HideCartButton:
        return {
        ...state,
        showCartButton: false,
    };



    case LayoutActionTypes.ShowAddItemButton:
        return {
        ...state,
        showAddItemButton: true,
    };

    case LayoutActionTypes.HideAddItemButton:
        return {
        ...state,
        showAddItemButton: false,
    };



    case LayoutActionTypes.ShowCheckoutButton:
        return {
        ...state,
        showCheckoutButton: true,
    };

    case LayoutActionTypes.HideCheckoutButton:
        return {
        ...state,
        showCheckoutButton: false,
    };

    

    case LayoutActionTypes.HideFooter:
      return {
        ...state,
        showFooter: false,
      };

    case LayoutActionTypes.ShowFooter:
      return {
        ...state,
        showFooter: true,
      };

    default:
      return state;
  }
}

export const getShowFooter = (state: State) => state.showFooter;
export const getShowCartButton = (state: State) => state.showCartButton;
export const getShowCheckoutButton = (state: State) => state.showCheckoutButton;
export const getAddItemButton = (state: State) => state.showAddItemButton;

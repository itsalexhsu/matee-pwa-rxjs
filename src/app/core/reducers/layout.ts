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

    case LayoutActionTypes.showCartButton:
        return {
        ...state,
        showCartButton: true,
    };

    case LayoutActionTypes.hideCartButton:
        return {
        ...state,
        showCartButton: false,
    };



    case LayoutActionTypes.showAddItemButton:
        return {
        ...state,
        showAddItemButton: true,
    };

    case LayoutActionTypes.hideAddItemButton:
        return {
        ...state,
        showAddItemButton: false,
    };



    case LayoutActionTypes.showCheckoutButton:
        return {
        ...state,
        showCheckoutButton: true,
    };

    case LayoutActionTypes.hideCheckoutButton:
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

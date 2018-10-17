import { LayoutActionTypes, LayoutActions } from '../actions/layout';

export interface State {
  showFab: boolean;
  showCartButton: boolean;
  showAddItemButton: boolean;
  showCheckoutButton: boolean
  showFooter: boolean;
  disableAddItemButton: boolean;
}

const initialState: State = {
  showFab: false,
  showCartButton: false,
  showAddItemButton: false,
  showCheckoutButton: false,
  showFooter: false,
  disableAddItemButton: true,
};

export function reducer(
  state: State = initialState,
  action: LayoutActions
): State {
  switch (action.type) {

    case LayoutActionTypes.ShowFab:
        return {
        ...state,
        showFab: true,
    };

    case LayoutActionTypes.HideFab:
        return {
        ...state,
        showFab: false,
    };

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

    case LayoutActionTypes.EnableAddItemButton:
        return {
        ...state,
        disableAddItemButton: false,
    };

    case LayoutActionTypes.DisableAddItemButton:
        return {
        ...state,
        disableAddItemButton: true,
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

export const getShowFab = (state: State) => state.showFab;
export const getShowFooter = (state: State) => state.showFooter;
export const getShowCartButton = (state: State) => state.showCartButton;
export const getShowCheckoutButton = (state: State) => state.showCheckoutButton;
export const getAddItemButton = (state: State) => state.showAddItemButton;
export const getDisableAddItemButton = (state: State) => state.disableAddItemButton;

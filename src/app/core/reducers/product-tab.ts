import { ProductTabActionTypes, PorductTabActions } from '../actions/product-tab';

export interface State {
  activeTab: number;
}

const initialState: State = {
  activeTab: 0,
};

export function reducer(
  state: State = initialState,
  action: PorductTabActions
): State {
  switch (action.type) {

    case ProductTabActionTypes.SelectTab:
        return {
        ...state,
        activeTab: action.payload,
    };

    default:
      return state;
  }
}

export const getActiveTab = (state: State) => state.activeTab;
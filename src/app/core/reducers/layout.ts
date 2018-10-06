import { LayoutActionTypes, LayoutActions } from '../actions/layout';

export interface State {
  showFooter: boolean;
}

const initialState: State = {
  showFooter: false,
};

export function reducer(
  state: State = initialState,
  action: LayoutActions
): State {
  switch (action.type) {
    case LayoutActionTypes.HideFooter:
      return {
        showFooter: false,
      };

    case LayoutActionTypes.ShowFooter:
      return {
        showFooter: true,
      };

    default:
      return state;
  }
}

export const getShowFooter = (state: State) => state.showFooter;

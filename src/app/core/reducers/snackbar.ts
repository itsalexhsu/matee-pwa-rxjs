import { SnackbarActionTypes, SnackbarActions } from '../actions/snackbar';

export interface State {
  showSnackbar: boolean;
}

const initialState: State = {
  showSnackbar: false,
};

export function reducer(
  state: State = initialState,
  action: SnackbarActions
): State {
  switch (action.type) {
    case SnackbarActionTypes.HideSnackbar:
      return {
        showSnackbar: false,
      };

    case SnackbarActionTypes.ShowSnackbar:
      return {
        showSnackbar: true,
      };

    default:
      return state;
  }
}

export const getShowSnackbar = (state: State) => state.showSnackbar;

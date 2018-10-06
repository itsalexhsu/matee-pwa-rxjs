import { BlendsActionTypes, BlendsActions, } from './../actions/blends';

export interface State {
  loaded: boolean;
  loading: boolean;
  data: any[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  data: [],
};

export function reducer(
  state = initialState,
  action: BlendsActions
): State {
  switch (action.type) {
    
    case BlendsActionTypes.Load: {
      return {
        ...state,
        loading: true,
      };
    }

    case BlendsActionTypes.LoadSuccess: {
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getBlendsLoaded = (state: State) => state.loaded;
export const getBlendsLoading = (state: State) => state.loading;
export const getBlendsResult = (state: State) => state.data;
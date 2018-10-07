import { BlendsActionTypes, BlendsActions, } from './../actions/blends';

export interface State {
  blendLoaded: boolean;
  blendLoading: boolean;
  blendData: any[];
  blendsLoaded: boolean;
  blendsLoading: boolean;
  blendsData: any[];
}

const initialState: State = {
  blendLoaded: false,
  blendLoading: false,
  blendsLoaded: false,
  blendsLoading: false,
  blendData: [],
  blendsData: [],
};

export function reducer(
  state = initialState,
  action: BlendsActions
): State {
  switch (action.type) {

    case BlendsActionTypes.Load: {
      return {
        ...state,
        blendLoading: true,
      };
    }

    case BlendsActionTypes.LoadSuccess: {
      return {
        ...state,
        blendLoaded: true,
        blendLoading: false,
        blendData: action.payload,
      };
    }
    
    case BlendsActionTypes.List: {
      return {
        ...state,
        blendsLoading: true,
      };
    }

    case BlendsActionTypes.ListSuccess: {
      return {
        ...state,
        blendsLoaded: true,
        blendsLoading: false,
        blendsData: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getBlendLoaded = (state: State) => state.blendLoaded;
export const getBlendLoading = (state: State) => state.blendLoading;
export const getBlendResult = (state: State) => state.blendData;

export const getBlendsLoaded = (state: State) => state.blendsLoaded;
export const getBlendsLoading = (state: State) => state.blendsLoading;
export const getBlendsResult = (state: State) => state.blendsData;
import { LambdaProductActionTypes, LambdaProductActions, } from './../actions/lambda';

export interface State {
  Loaded: boolean;
  Loading: boolean;
  Data: any;
}

const initialState: State = {
  Loaded: false,
  Loading: false,
  Data: null,
};

export function reducer(
  state = initialState,
  action: LambdaProductActions
): State {
  switch (action.type) {

    case LambdaProductActionTypes.Load: {
      return {
        ...state,
        Loading: true,
      };
    }

    case LambdaProductActionTypes.LoadSuccess: {
      return {
        ...state,
        Loaded: true,
        Loading: false,
        Data: action.payload.res,
      };
    }

    case LambdaProductActionTypes.LoadFail: {
      return {
        ...state,
        Loaded: false,
        Loading: false,
        Data: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getLambdaProductLoaded = (state: State) => state.Loaded;
export const getLambdaProductLoading = (state: State) => state.Loading;
export const getLambdaProductResult = (state: State) => state.Data;
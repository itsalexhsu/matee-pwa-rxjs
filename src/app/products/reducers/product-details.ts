import { ProductActionTypes, ProductActions, } from './../actions/product';
import { Product, Variant } from 'src/app/shared';

export interface State {
  Loaded: boolean;
  Loading: boolean;
  Data: Product;
  Variant: Variant;
}

const initialState: State = {
  Loaded: false,
  Loading: false,
  Data: null,
  Variant: null,
};

export function reducer(
  state = initialState,
  action: ProductActions
): State {
  switch (action.type) {

    case ProductActionTypes.SelectVariant: {
      return {
        ...state,
        Variant: action.payload,
      };
    }

    case ProductActionTypes.Load: {
      return {
        ...state,
        Loading: true,
      };
    }

    case ProductActionTypes.LoadSuccess: {
      return {
        ...state,
        Loaded: true,
        Loading: false,
        Data: action.payload,
      };
    }

    case ProductActionTypes.LoadFail: {
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

export const getProductLoaded = (state: State) => state.Loaded;
export const getProductLoading = (state: State) => state.Loading;
export const getProductResult = (state: State) => state.Data;
export const getSelectedVariant = (state: State) => state.Variant;
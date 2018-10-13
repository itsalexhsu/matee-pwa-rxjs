import { ProductActionTypes, ProductActions, } from './../actions/product';
import { Product } from 'src/app/shared';

export interface State {
  Loaded: boolean;
  Loading: boolean;
  Data: Product[];
}

const initialState: State = {
  Loaded: false,
  Loading: false,
  Data: [],
};

export function reducer(
  state = initialState,
  action: ProductActions
): State {
  switch (action.type) {
    
    case ProductActionTypes.List: {
      return {
        ...state,
        Loading: true,
      };
    }

    case ProductActionTypes.ListSuccess: {
      return {
        ...state,
        Loaded: true,
        Loading: false,
        Data: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getProductsLoaded = (state: State) => state.Loaded;
export const getProductsLoading = (state: State) => state.Loading;
export const getProductsResult = (state: State) => state.Data;
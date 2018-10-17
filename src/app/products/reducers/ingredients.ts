import { IngredientActionTypes, IngredientActions, } from './../actions/ingredient';

export interface State {
  Loaded: boolean;
  Loading: boolean;
  Data: any;
  Ingredients: any;
}

const initialState: State = {
  Loaded: false,
  Loading: false,
  Data: null,
  Ingredients: null,
};

export function reducer(
  state = initialState,
  action: IngredientActions
): State {
  switch (action.type) {

    case IngredientActionTypes.SelectIngredients: {
      return {
        ...state,
        Ingredients: action.payload,
      };
    }

    case IngredientActionTypes.Load: {
      return {
        ...state,
        Loading: true,
      };
    }

    case IngredientActionTypes.LoadSuccess: {
      return {
        ...state,
        Loaded: true,
        Loading: false,
        Data: action.payload.res,
      };
    }

    case IngredientActionTypes.LoadFail: {
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

export const getIngredientsLoaded = (state: State) => state.Loaded;
export const getIngredientsLoading = (state: State) => state.Loading;
export const getIngredientsResult = (state: State) => state.Data;
export const getSelectedIngredients = (state: State) => state.Ingredients;
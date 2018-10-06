import { ResourceActionTypes, ResourceActions, } from './../actions/resource';
import { Resource } from '../models/resource.model'

export interface State {
    loaded: boolean;
    loading: boolean;
    created: boolean;
    creating: boolean;
    data: any | null;
  }
  
  const initialState: State = {
    loaded: false,
    loading: false,
    created: false,
    creating: false,
    data: null,
  };

  export function reducer(
    state = initialState,
    action: ResourceActions
  ): State {
    switch (action.type) {
      
      case ResourceActionTypes.Create: {
        return {
          ...state,
          creating: true,
          data: action.payload,
        };
      }

      case ResourceActionTypes.CreateSuccess: {
        return {
          ...state,
          creating: false,
        };
      }

      case ResourceActionTypes.CreateFail: {
        return {
          ...state,
          creating: false,
        };
      }

      case ResourceActionTypes.Load: {
        return {
          ...state,
          loading: true,
        };
      }

      case ResourceActionTypes.LoadSuccess: {
        return {
          ...state,
          loading: false,
          loaded: true,
          data: action.payload,
        };
      }

      case ResourceActionTypes.LoadFail: {
        return {
          ...state,
          loading: false,
          loaded: true,
          data: action.payload,
        };
      }
  
      default: {
        return state;
      }
    }
  }
  
  export const getLoaded = (state: State) => state.loaded;
  export const getLoading = (state: State) => state.loading;
  export const getCreating = (state: State) => state.creating;
  export const getResult = (state: State) => state.data;
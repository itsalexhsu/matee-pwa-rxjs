import { ResourceActionTypes, ResourceActions, } from './../actions/resource';
import { Resource } from '../models/resource.model'

export interface State {
    loaded: boolean;
    loading: boolean;
    created: boolean;
    creating: boolean;
    data: Resource[];
    attachment: any | null;
  }
  
  const initialState: State = {
    loaded: false,
    loading: false,
    created: false,
    creating: false,
    data: [],
    attachment: null,
  };
  
  export function reducer(
    state = initialState,
    action: ResourceActions
  ): State {
    switch (action.type) {
        case ResourceActionTypes.LoadAll: {
            return {
              ...state,
              loading: true,
            };
          }
        
          case ResourceActionTypes.LoadAllSuccess: {
            return {
              ...state,
              loading: false,
              loaded: true,
              data: action.payload,
            };
          }
        
          case ResourceActionTypes.LoadAllFail: {
            return {
              ...state,
              loading: false,
              loaded: false,
            };
          }
  
          default: {
            return state;
          }
          
        }
    }

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getResult = (state: State) => state.data;
export const getAttachment = (state: State) => state.attachment;
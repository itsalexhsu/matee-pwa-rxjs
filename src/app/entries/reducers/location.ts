import { LocationActionTypes, LocationActions } from "./../actions/location";

export interface State {
    searched: boolean;
    searching: boolean;
    data: any[];
    userCoordinate: any | null;
}

const initialState: State = {
    searched: false,
    searching: false,
    data: [],
    userCoordinate: null,
}

export function reducer(
    state = initialState,
    action: LocationActions
  ): State {
    switch (action.type) {
      
      case LocationActionTypes.Search:
      case LocationActionTypes.SearchNearby: {
        return {
          ...state,
          searching: true,
        };
      }
  
      case LocationActionTypes.SearchFail: {
        return {
          ...state,
          searched: false,
          searching: false,
        };
      }
  
      case LocationActionTypes.SearchSuccess: {
        return {
          ...state,
          searched: true,
          searching: false,
          data: action.payload,
        };
      }

      case LocationActionTypes.Clear: {
        return {
          ...state,
          data: [],
        };
      }

      case LocationActionTypes.GetUserCoordSuccess: {
        return {
          ...state,
          userCoordinate: action.payload,
        };
      }

      default: {
        return state;
      }
    }
  }
  
  export const getSearched = (state: State) => state.searched;
  export const getSearching = (state: State) => state.searching;
  export const getResult = (state: State) => state.data;
  export const getUserCoord = (state: State) => state.userCoordinate;
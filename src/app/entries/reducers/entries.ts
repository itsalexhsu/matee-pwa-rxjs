import { EntryActionTypes, EntryActions, } from './../actions/entry';
import { Entry } from '../models/entry.model'

export interface State {
  loaded: boolean;
  loading: boolean;
  data: Entry[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  data: [],
};

export function reducer(
  state = initialState,
  action: EntryActions
): State {
  switch (action.type) {
    
    case EntryActionTypes.Load: {
      return {
        ...state,
        loading: true,
      };
    }

    case EntryActionTypes.Load: {
      return {
        ...state,
        loading: true,
      };
    }

    case EntryActionTypes.LoadSuccess: {
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.payload,
      };
    }

    case EntryActionTypes.CreateEntrySuccess:
    case EntryActionTypes.RemoveEntryFail: {
      if (state.data.indexOf(action.payload) > -1) {
        return state;
      }

      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }

    case EntryActionTypes.RemoveEntrySuccess:
    case EntryActionTypes.CreateEntryFail: {
      return {
        ...state,
        data: state.data.filter(data => data !== action.payload),
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

import { PouchDbActionTypes, PouchDbActions } from '../actions/pouchdb';

export interface State {
  dbDestroyed: boolean;
}

const initialState: State = {
  dbDestroyed: false,
};

export function reducer(
  state: State = initialState,
  action: PouchDbActions
): State {
  switch (action.type) {
    case PouchDbActionTypes.DestroyDBSuccess:
      return {
        dbDestroyed: true,
      };

    default:
      return state;
  }
}

export const getDBDestroyed = (state: State) => state.dbDestroyed;

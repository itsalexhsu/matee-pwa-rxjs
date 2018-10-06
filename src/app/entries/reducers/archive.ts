import { ResourceActionTypes, ResourceActions, } from './../actions/resource';

export interface State {
    archived: boolean;
    archiving: boolean;
  }
  
  const initialState: State = {
    archived: false,
    archiving: false,
  };

  export function reducer(
    state = initialState,
    action: ResourceActions
  ): State {
    switch (action.type) {
        case ResourceActionTypes.Archive: {
            return {
              ...state,
              archiving: true,
            };
          }
        
          case ResourceActionTypes.ArchiveSuccess: {
            return {
              ...state,
              archiving: false,
              archived: true,
            };
          }
        
          case ResourceActionTypes.ArchiveFail: {
            return {
              ...state,
              archiving: false,
              archived: false,
            };
          }
  
          default: {
            return state;
          }
          
        }
    }

export const getArchived = (state: State) => state.archived;
export const getArchiving = (state: State) => state.archiving;
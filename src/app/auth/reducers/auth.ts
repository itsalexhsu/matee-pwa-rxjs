import { AuthActionTypes, AuthActions } from "./../actions/auth";
import { CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";

export interface State {
    user: CognitoUserAttribute[] | null;
}

const initialState: State = {
    user: null,
}

export function reducer(
    state = initialState,
    action: AuthActions
  ): State {
    switch (action.type) {

      case AuthActionTypes.LoadUserSuccess: {
        return {
          ...state,
          user: action.payload
        };
      }

      default: {
        return state;
      }
    }
  }
  
  
  export const getUser = (state: State) => state.user;
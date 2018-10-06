import { LoginActionTypes, LoginActions } from "./../actions/login";
import { CognitoUser } from "amazon-cognito-identity-js";

export interface State {
    authenticated: boolean;
    loginPending: boolean;
    loginError: string | null;
    user: CognitoUser | null
    mfaRequired: boolean;
    mfaError: string | null;
}

const initialState: State = {
    authenticated: false,
    loginPending: false,
    loginError: null,
    user: null,
    mfaRequired: false,
    mfaError: null,
}

export function reducer(
    state = initialState,
    action: LoginActions
  ): State {
    switch (action.type) {

      case LoginActionTypes.Login: {
        return {
          ...state,
          loginPending: true
        };
      }

      case LoginActionTypes.LoginSuccess:
      case LoginActionTypes.MfaSuccess: {
        return {
          ...state,
          loginPending: false,
          authenticated: true,
        };
      }

      case LoginActionTypes.LoginFail: {
        return {
          ...state,
          loginPending: false,
          loginError: action.payload
        };
      }

      case LoginActionTypes.Logout: {
        return {
          ...state,
          authenticated: false,
        };
      }

      case LoginActionTypes.MfaRequired: {
        return {
          ...state,
          loginPending: false,
          mfaRequired: true,
        };
      }

      case LoginActionTypes.MfaFail: {
        return {
          ...state,
          mfaRequired: true,
          mfaError: action.payload
        };
      }

      default: {
        return state;
      }
    }
  }
  
  export const getAuthenticated = (state: State) => state.authenticated;
  export const getLoginPending = (state: State) => state.loginPending;
  export const getLonginError = (state: State) => state.loginError;
  export const getMfa = (state: State) => state.mfaRequired;
  export const getMfaFail = (state: State) => state.mfaError;
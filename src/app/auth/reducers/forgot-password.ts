import { LoginActionTypes, LoginActions } from "./../actions/login";

export interface State {
    forgotPasswordPending: boolean;
    forgotPasswordError: string | null;
    forgotPasswordUsername: string | null;
    resetPasswordPending: boolean;
    resetPasswordError: string | null;
    resetPasswordSuccess: boolean;
}

const initialState: State = {
    forgotPasswordPending: false,
    forgotPasswordError: null,
    forgotPasswordUsername: null,
    resetPasswordPending: false,
    resetPasswordError: null,
    resetPasswordSuccess: false,
}

export function reducer(
    state = initialState,
    action: LoginActions
  ): State {
    switch (action.type) {

      case LoginActionTypes.ForgotPassword: {
        return {
          ...state,
          forgotPasswordPending: true,
          forgotPasswordUsername: action.payload
        };
      }

      case LoginActionTypes.ForgotPasswordSuccess: {
        return {
          ...state,
          forgotPasswordPending: false
        };
      }

      case LoginActionTypes.ForgotPasswordFail: {
        return {
          ...state,
          forgotPasswordPending: false,
          forgotPasswordError: action.payload
        };
      }

      case LoginActionTypes.ResetPassword: {
        return {
          ...state,
          resetPasswordPending: true
        };
      }

      case LoginActionTypes.ResetPasswordSuccess: {
        return {
          ...state,
          resetPasswordPending: false
        };
      }

      case LoginActionTypes.ResetPasswordFail: {
        return {
          ...state,
          resetPasswordPending: false,
          resetPasswordError: action.payload
        };
      }

      case LoginActionTypes.ResetPasswordSuccess: {
        return {
          ...state,
          resetPasswordPending: false,
          resetPasswordSuccess: true,
        };
      }

      default: {
        return state;
      }
    }
  }
  
  export const getForgotPasswordPending = (state: State) => state.forgotPasswordPending;
  export const getForgotPasswordError = (state: State) => state.forgotPasswordError;
  export const getForgotPasswordUsername = (state: State) => state.forgotPasswordUsername;
  export const getResetPasswordPending = (state: State) => state.resetPasswordPending;
  export const getResetPasswordError = (state: State) => state.resetPasswordError;
  export const getResetPasswordSuccess = (state: State) => state.resetPasswordSuccess;
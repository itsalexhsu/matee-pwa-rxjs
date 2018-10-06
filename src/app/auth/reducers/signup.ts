import { SignupActionTypes, SignupActions } from "./../actions/signup";
import { User } from "../models/auth.model";

export interface State {
    stepSuccess: boolean
    stepError: boolean
    data: User | null
    error: string | null
}

const initialState: State = {
    stepSuccess: false,
    stepError: false,
    data: null,
    error: null
}

export function reducer(
    state = initialState,
    action: SignupActions
  ): State {
    switch (action.type) {

      case SignupActionTypes.SignupSuccess: {
        return {
          ...state,
          stepSuccess: true
        };
      }

      case SignupActionTypes.SignupFail: {
        return {
          ...state,
          stepError: true,
          error: action.payload,
        };
      }

      case SignupActionTypes.VerificationSuccess: {
        return {
          ...state,
          stepSuccess: true
        };
      }

      case SignupActionTypes.VerificationFail: {
        return {
          ...state,
          stepError: true,
          error: action.payload,
        };
      }

      default: {
        return state;
      }
    }
  }
  
  export const getStepSuccess = (state: State) => state.stepSuccess;
  export const getStepError = (state: State) => state.stepError;
  export const getError = (state: State) => state.error;
  export const getData = (state: State) => state.data;
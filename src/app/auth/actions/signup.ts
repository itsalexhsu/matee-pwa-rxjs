import { Action } from '@ngrx/store';
import { User, VerificationRequest } from "../models/auth.model";

export enum SignupActionTypes {
  Signup = '[Auth] Signup',
  SignupSuccess = '[Auth] Signup Success',
  SignupFail = '[Auth] Signup Fail',
  Verify = '[Auth] Verify',
  VerificationSuccess = '[Auth] Verification Success',
  VerificationFail = '[Auth] Verification Fail',
}

// Signup Actions

export class Signup implements Action {
    readonly type = SignupActionTypes.Signup;

    constructor(public payload: User) {}
}
export class SignupSuccess implements Action {
    readonly type = SignupActionTypes.SignupSuccess;
}

export class SignupFail implements Action {
    readonly type = SignupActionTypes.SignupFail;

    constructor(public payload: any) {}
}
export class Verify implements Action {
    readonly type = SignupActionTypes.Verify;

    constructor(public payload: VerificationRequest) {}
}
export class VerificationSuccess implements Action {
    readonly type = SignupActionTypes.VerificationSuccess;
}
export class VerificationFail implements Action {
    readonly type = SignupActionTypes.VerificationFail;

    constructor(public payload: any) {}
}

export type SignupActions =
  | Signup
  | SignupSuccess
  | SignupFail
  | Verify
  | VerificationSuccess
  | VerificationFail
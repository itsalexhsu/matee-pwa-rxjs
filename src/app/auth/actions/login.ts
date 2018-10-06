import { Action } from '@ngrx/store';
import { Auth, NewPasswordForm, ResetPasswordRequest } from "../models/auth.model";
import { CognitoUser } from 'amazon-cognito-identity-js';

export enum LoginActionTypes {
  Login = '[Login] Login',
  Logout = '[Login] Logout',
  LoginSuccess = '[Login] Login Success',
  LoginFail = '[Login] Login Fail',
  LoginRedirect = '[Login] Login Redirect',
  MfaAttempt = '[Login] MFA Attempt',
  MfaRequired = '[Login] MFA Required',
  MfaSuccess = '[Login] MFA Success',
  MfaFail = '[Login] MFA Fail',
  ForgotPassword = '[Login] Forgot Password',
  ForgotPasswordSuccess = '[Login] Forgot Success',
  ForgotPasswordFail = '[Login] Forgot Fail',
  ResetPassword = '[Login] Reset Password',
  ResetPasswordSuccess = '[Login] Reset Password Success',
  ResetPasswordFail = '[Login] Reset Password Fail',
}

//Login Actions

export class Login implements Action {
    readonly type = LoginActionTypes.Login;

    constructor(public payload: Auth) {}
}

export class Logout implements Action {
    readonly type = LoginActionTypes.Logout;
}

export class LoginSuccess implements Action {
    readonly type = LoginActionTypes.LoginSuccess;

    constructor(public payload: any) {}
}

export class LoginFail implements Action {
    readonly type = LoginActionTypes.LoginFail;

    constructor(public payload: any) {}
}

export class LoginRedirect implements Action {
    readonly type = LoginActionTypes.LoginRedirect;
}

//Reset Password Actions

export class ResetPassword implements Action {
    readonly type = LoginActionTypes.ResetPassword;

    constructor(public payload: ResetPasswordRequest) {}
}

export class ResetPasswordSuccess implements Action {
    readonly type = LoginActionTypes.ResetPasswordSuccess;
}

export class ResetPasswordFail implements Action {
    readonly type = LoginActionTypes.ResetPasswordFail;

    constructor(public payload: any) {}
}

//Forgot Password Actions

export class ForgotPassword implements Action {
    readonly type = LoginActionTypes.ForgotPassword;

    constructor(public payload: string) {}
}

export class ForgotPasswordSuccess implements Action {
    readonly type = LoginActionTypes.ForgotPasswordSuccess;
}

export class ForgotPasswordFail implements Action {
    readonly type = LoginActionTypes.ForgotPasswordFail;

    constructor(public payload: any) {}
}

// MFA Actions

export class MfaRequired implements Action {
    readonly type = LoginActionTypes.MfaRequired;

    constructor(public payload: any) {}
}

export class MfaAttempt implements Action {
    readonly type = LoginActionTypes.MfaAttempt;

    constructor(public payload: any) {}
}

export class MfaSuccess implements Action {
    readonly type = LoginActionTypes.MfaSuccess;
}

export class MfaFail implements Action {
    readonly type = LoginActionTypes.MfaFail;

    constructor(public payload: string) {}
}

export type LoginActions =
  | Login
  | LoginSuccess
  | LoginFail
  | LoginRedirect
  | Logout
  | MfaRequired
  | MfaAttempt
  | MfaFail
  | MfaSuccess
  | ResetPassword
  | ResetPasswordSuccess
  | ResetPasswordFail
  | ForgotPassword
  | ForgotPasswordSuccess
  | ForgotPasswordFail
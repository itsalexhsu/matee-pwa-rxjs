import { Action } from '@ngrx/store';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

export enum AuthActionTypes {
  LoadUser = '[Auth] Load User',
  LoadUserSuccess = '[Auth] Load User Success',
  LoadUserFail = '[Auth] Load User Fail',
}

//Load User Actions

export class LoadUser implements Action {
    readonly type = AuthActionTypes.LoadUser;
}

export class LoadUserSuccess implements Action {
    readonly type = AuthActionTypes.LoadUserSuccess;

    constructor(public payload: CognitoUserAttribute[]) {}
}

export class LoadUserFail implements Action {
    readonly type = AuthActionTypes.LoadUserFail;

    constructor(public payload: any) {}
}

export type AuthActions =
  | LoadUser
  | LoadUserSuccess
  | LoadUserFail
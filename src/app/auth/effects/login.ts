import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { from } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

import { Effect, Actions, ofType } from '@ngrx/effects';

import * as PouchDB from '../../core/actions/pouchdb';
import * as snackbar from '../../core/actions/snackbar'
import * as auth from '../../auth/actions/auth'
import * as fromRoot from '../../reducers';

import { Auth, ResetPasswordRequest } from "../models/auth.model";

import { LoginService } from "../services/login";

import {
  Login,
  ForgotPassword,
  LoginActionTypes,
  MfaAttempt,
  ResetPassword,
} from '../actions/login'

@Injectable()
export class LoginEffects {

  // Login effects

  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType(LoginActionTypes.Login),
    map((action: Login) => action.payload),
    switchMap((auth: Auth) =>
        from(this.authLogin.authenticate(auth.username, auth.password))
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(LoginActionTypes.LoginSuccess),
    tap(() => {
      this.router.navigate([''])
      this.store.dispatch(new auth.LoadUser())
      this.store.dispatch(new snackbar.ShowSnackbar({message: 'You\'re now signed in', action: 'Close'}))
    })
  );

  @Effect({ dispatch: false })
  loginFail$ = this.actions$.pipe(
    ofType(LoginActionTypes.LoginFail),
    tap(() => {
      this.store.dispatch(new snackbar.ShowSnackbar({message: 'The email or password you entered is incorrect', action: 'Try Again'}))
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType(LoginActionTypes.Logout),
    tap(() => {
      this.authLogin.logout()
      this.router.navigate([''])
      this.store.dispatch(new PouchDB.SyncDBCancel)
      this.store.dispatch(new snackbar.ShowSnackbar({message: 'You\'re now signed out', action: 'Close'}))
    })
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(LoginActionTypes.LoginRedirect),
    tap(() => {
      this.router.navigate(['/login'])
    })
  );

    // MFA effects

    @Effect({ dispatch: false })
    mfaRequired$ = this.actions$.pipe(
      ofType(LoginActionTypes.MfaRequired),
      tap(() => this.router.navigate(['/login/verification']))
    );
  
    @Effect({ dispatch: false })
    mfaAttempt = this.actions$.pipe(
      ofType(LoginActionTypes.MfaAttempt),
      map((action: MfaAttempt) => action.payload),
      switchMap(payload =>
        from(this.authLogin.onMfaAttempt(payload.username, payload.code))
      )
    );
  
    @Effect({ dispatch: false })
    mfaSuccess$ = this.actions$.pipe(
      ofType(LoginActionTypes.LoginSuccess, LoginActionTypes.MfaSuccess),
      tap(() => {
        this.router.navigate([''])
      })
    );
  
    @Effect({ dispatch: false })
    mfaFail$ = this.actions$.pipe(
      ofType(LoginActionTypes.MfaFail),
      tap(() => {
        this.store.dispatch(new snackbar.ShowSnackbar({message: 'The code you entered is incorrect', action: 'Try Again'}))
      })
    );

    // Reset Password effects

    @Effect({ dispatch: false })
    resetPassword$ = this.actions$.pipe(
      ofType(LoginActionTypes.ResetPassword),
      map((action: ResetPassword) => action.payload),
      switchMap((request: ResetPasswordRequest) =>
          from(this.authLogin.confirmNewPassword(request.username, request.verificationCode, request.password))
      )
    );

    @Effect({ dispatch: false })
    resetPasswordSuccess$ = this.actions$.pipe(
      ofType(LoginActionTypes.ResetPasswordSuccess),
      tap(() => {
        this.store.dispatch(new snackbar.ShowSnackbar({message: 'Your password has been changed', action: 'Close'}))
        this.router.navigate(['/login'])
      })
    );

    @Effect({ dispatch: false })
    resetPasswordFail$ = this.actions$.pipe(
      ofType(LoginActionTypes.ResetPasswordFail),
      tap(() => {
        this.store.dispatch(new snackbar.ShowSnackbar({message: 'The code you entered is incorrect', action: 'Try Again'}))
      })
    );

    // Forgot Password effects

    @Effect({ dispatch: false })
    forgotPassword = this.actions$.pipe(
      ofType(LoginActionTypes.ForgotPassword),
      map((action: ForgotPassword) => action.payload),
      switchMap((username: string) =>
          from(this.authLogin.forgotPassword(username))
      )
    );

    @Effect({ dispatch: false })
    forgotPasswordSuccess$ = this.actions$.pipe(
      ofType(LoginActionTypes.ForgotPasswordSuccess),
      tap(() => {
        this.router.navigate(['/reset-password'])
      })
    );

    @Effect({ dispatch: false })
    forgotPasswordFail$ = this.actions$.pipe(
      ofType(LoginActionTypes.ForgotPasswordFail),
      tap(() => {
        this.store.dispatch(new snackbar.ShowSnackbar({message: 'This user does not exist', action: 'Try Again'}))
      })
    );
  
  constructor(
    private authLogin: LoginService,
    private actions$: Actions,
    private router: Router,
    private http: HttpClient,
    private store: Store<fromRoot.State>,
  ) { }
}
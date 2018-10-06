import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { map, tap, switchMap } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { User, VerificationRequest } from "../models/auth.model";

import { RegistrationService } from "../services/registration";

import * as snackbar from '../../core/actions/snackbar'
import * as login from '../actions/login'
import * as fromRoot from '../../reducers';

import {
  Signup,
  Verify,
  SignupActionTypes,
} from '../actions/signup'

@Injectable()
export class SignupEffects {

  @Effect({ dispatch: false })
  enterUsernameRedirect$ = this.actions$.pipe(
    ofType(SignupActionTypes.Signup),
    map((action: Signup) => action.payload),
    switchMap((user: User) => this.registration.register(user))
  );

  @Effect({ dispatch: false })
  signupSuccess$ = this.actions$.pipe(
    ofType(SignupActionTypes.SignupSuccess),
    tap(() => {
      this.router.navigate(['/signup/welcome'])
    })
  );

  @Effect({ dispatch: false })
  signupFail$ = this.actions$.pipe(
    ofType(SignupActionTypes.SignupFail),
    tap(() => {
      this.store.dispatch(new snackbar.ShowSnackbar({message: 'A user with this phone number already exists', action: 'Try again'}))
    })
  );

  @Effect({ dispatch: false })
  verify$ = this.actions$.pipe(
    ofType(SignupActionTypes.Verify),
    map((action: Verify) => action.payload),
    switchMap((request: VerificationRequest) => this.registration.confirmRegistration(request.user.username, request.code))
  );

  @Effect({ dispatch: false })
  verificationSuccess$ = this.actions$.pipe(
    ofType(SignupActionTypes.VerificationSuccess),
    tap(() => {
      this.router.navigate(['/'])
    })
  );

  @Effect({ dispatch: false })
  verificationFail$ = this.actions$.pipe(
    ofType(SignupActionTypes.VerificationFail),
    tap(() => {
      this.store.dispatch(new snackbar.ShowSnackbar({message: 'The code you entered was incorrect', action: 'Try again'}))
    })
  );
  
  constructor(
    private registration: RegistrationService,
    private actions$: Actions,
    private router: Router,
    private store: Store<fromRoot.State>,) { }
}
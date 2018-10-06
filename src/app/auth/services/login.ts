import { Injectable } from '@angular/core';

import { AuthenticationDetails, CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import * as AWS from "aws-sdk/global";
import * as STS from "aws-sdk/clients/sts";

import { Store } from '@ngrx/store';

import * as pouchDb from '../../core/actions/pouchdb'
import * as login from '../actions/login'
import * as fromAuth from '../../reducers/';

import { CognitoService } from './cognito'

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  cognitoUser: CognitoUser

  private onLoginSuccess(session: CognitoUserSession) {
    AWS.config.credentials = this.cognito.buildCognitoCreds(session.getIdToken().getJwtToken())
    let clientParams: any = {}
    let sts = new STS(clientParams)
    sts.getCallerIdentity(() => {
        this.store.dispatch(new login.LoginSuccess(session))
    });
  }

  onMfaAttempt(username: string, verificationCode: string) {
    return new Promise(resolve => {
      let userData = {
        Username: username,
        Pool: this.cognito.getUserPool()
      };
      this.cognitoUser = new CognitoUser(userData);

      this.cognitoUser.sendMFACode(verificationCode, {
        onSuccess: result => this.store.dispatch(new login.MfaSuccess()),
        onFailure: err => this.store.dispatch(new login.MfaFail(err))
      })
    })
  }

  authenticate(username: string, password: string) {
    return new Promise(resolve => {
      let authenticationData = {
          Username: username,
          Password: password,
      };
      let authenticationDetails = new AuthenticationDetails(authenticationData);

      let userData = {
          Username: username,
          Pool: this.cognito.getUserPool()
      };
      this.cognitoUser = new CognitoUser(userData);
      
      this.cognitoUser.authenticateUser(authenticationDetails, {
          newPasswordRequired: (userAttributes, requiredAttributes) => this.store.dispatch(new login.MfaFail('Need to set password')),
          onSuccess: result => this.onLoginSuccess(result),
          onFailure: err => this.store.dispatch(new login.LoginFail(err.message)),
          mfaRequired: (challengeName, challengeParameters) => {
            this.store.dispatch(new login.MfaRequired({challengeName, challengeParameters}))
          }
      });
    })
  }

  forgotPassword(username: string) {
    return new Promise(() => {
      let userData = {
        Username: username,
        Pool: this.cognito.getUserPool()
      }
      let cognitoUser = new CognitoUser(userData)
      cognitoUser.forgotPassword({
        onSuccess: () => this.store.dispatch(new login.ForgotPasswordSuccess()),
        onFailure: (err: Error) => this.store.dispatch(new login.ForgotPasswordFail(err.message))
      })
    })
  }

  confirmNewPassword(username, verificationCode, password) {
    return new Promise(() => {
      let userData = {
        Username: username,
        Pool: this.cognito.getUserPool()
      }
      let cognitoUser = new CognitoUser(userData)
      cognitoUser.confirmPassword(verificationCode, password, {
        onSuccess: () => this.store.dispatch(new login.ResetPasswordSuccess()),
        onFailure: (err: Error) => this.store.dispatch(new login.ResetPasswordFail(err.message))
      })
    })
  }

  logout() {
    this.store.dispatch(new pouchDb.DestroyDB())
    this.cognito.getCurrentUser().signOut()
  }

  isAuthenticated(): boolean {
    let authenticated: boolean = false
    let cognitoUser = this.cognito.getCurrentUser()
    if (cognitoUser) {
      cognitoUser.getSession((err, res) => {
        if (err) { console.log( 'Error:', err ) } else
        if (res) { authenticated = true }
      })
    }
    return authenticated
  }

  constructor(
    private cognito: CognitoService,
    private store: Store<fromAuth.State>,
  ) { }

}

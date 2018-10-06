import { Injectable } from '@angular/core';

import { CognitoService } from './cognito'

import { Store, select } from '@ngrx/store';

import * as signup from '../actions/signup'
import * as fromAuth from '../../reducers/';

import {CognitoUser, CognitoUserAttribute} from "amazon-cognito-identity-js";
import * as AWS from "aws-sdk/global";
import { User } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  cognitoUser

  register(newUser: User) {
    return new Promise(resolve => {

      let attributeList = []

      let dataName = {
        Name: 'name',
        Value: newUser.name
      }

      let dataEmail = {
        Name: 'email',
        Value: newUser.email
      }

      attributeList.push(new CognitoUserAttribute(dataName))
      attributeList.push(new CognitoUserAttribute(dataEmail))

      this.cognito.getUserPool().signUp(newUser.username, newUser.password, attributeList, null, (err, res) => {
        if (err) {
          this.store.dispatch(new signup.SignupFail(err))
        } else {
          this.store.dispatch(new signup.SignupSuccess())
        }
      })

    })
  }

  confirmRegistration(username: string, verificationCode: string) {

    console.log(username, verificationCode)
    return new Promise(resolve => {

      let userData = {
        Username: username,
        Pool: this.cognito.getUserPool()
      }

      let cognitoUser = new CognitoUser(userData)

      cognitoUser.confirmRegistration(verificationCode, true, (err, res) => {
        if (res) {
          this.store.dispatch(new signup.VerificationSuccess())
        } else {
          this.store.dispatch(new signup.VerificationFail(err.message))
        }
      })

    })
  }

  resendCode(username, callback) {
    let userData = {
        Username: username,
        Pool: this.cognito.getUserPool()
    };
    let cognitoUser = new CognitoUser(userData)
    cognitoUser.resendConfirmationCode(callback)
  }

  constructor(
    private cognito: CognitoService,
    private store: Store<fromAuth.State>,
  ) { }

}

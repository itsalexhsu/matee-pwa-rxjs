import { Injectable } from '@angular/core';

import { CognitoUserPool, AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserSession } from "amazon-cognito-identity-js";
import * as AWS from "aws-sdk/global";
import * as awsservice from "aws-sdk/lib/service";
import * as CognitoIdentity from "aws-sdk/clients/cognitoidentity";
import * as STS from "aws-sdk/clients/sts";

import { Store, select } from '@ngrx/store';

import * as auth from '../actions/auth'
import * as fromAuth from '../../reducers/';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  cognitoUser
  cognitoCreds: AWS.CognitoIdentityCredentials;

  // AWS Stores Credentials in many ways, and with TypeScript this means that
  // getting the base credentials we authenticated with from the AWS globals gets really murky,
  // having to get around both class extension and unions. Therefore, we're going to give
  // developers direct access to the raw, unadulterated CognitoIdentityCredentials
  // object at all times.
  setCognitoCreds(creds: AWS.CognitoIdentityCredentials) {
      this.cognitoCreds = creds;
  }

  getUserPool() {
    let poolData = {
       UserPoolId: 'us-east-1_P9HBPYW6M',
       ClientId: '2ilfhlqjig5ab2u0i9vf96mgsg'
     }
     return new CognitoUserPool(poolData)
  }

  buildCognitoCreds(idTokenJwt) {
    let region = 'us-east-1'
    let poolId = 'us-east-1_P9HBPYW6M'

    let url = 'cognito-idp.' + region.toLowerCase() + '.amazonaws.com/' + poolId;
    let logins: CognitoIdentity.LoginsMap = {};
    logins[url] = idTokenJwt;
    let params = {
        IdentityPoolId: poolId, /* required */
        Logins: logins
    };
    let serviceConfigs = <awsservice.ServiceConfigurationOptions>{};
    let creds = new AWS.CognitoIdentityCredentials(params, serviceConfigs);
    this.setCognitoCreds(creds);
    return creds;
  }

  getCurrentUser() {
      return this.getUserPool().getCurrentUser()
  }

  getParameters() {
    return new Promise(() => {
      let cognitoUser = this.getCurrentUser()
      cognitoUser.getSession((err, session) => {
        cognitoUser.getUserAttributes((err, res) => {
          if (err) {
            this.store.dispatch(new auth.LoadUserFail(err))
          } else {
            this.store.dispatch(new auth.LoadUserSuccess(res))
          }
        })
      })
    })
  }

  getAccessToken() {
    return new Promise(resolve => {
      if (this.getCurrentUser()) {
        this.getCurrentUser().getSession((err, session) => {
          session.getAccessToken().getJwtToken()
        })
      }
    })
  }

  getIdToken() {
    return new Promise(resolve => {
      if (this.getCurrentUser()) {
        this.getCurrentUser().getSession((err, session) => {
          resolve(session.getIdToken())
        })
      }
    })
  }

  getRefreshToken() {
    return new Promise(resolve => {
      if (this.getCurrentUser()) {
        this.getCurrentUser().getSession((err, session) => {
          resolve(session.getRefreshToken())
        })
      }
    })
  }

  constructor(
    private store: Store<fromAuth.State>,
  ) { }

}

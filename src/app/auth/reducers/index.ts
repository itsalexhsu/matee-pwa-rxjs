import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
  import * as fromRoot from '../../reducers';
  import * as fromAuth from './auth';
  import * as fromLogin from './login';
  import * as fromSignup from './signup';
  import * as fromForgotPasword from './forgot-password';

  
  export interface AuthState {
    auth: fromAuth.State;
    login: fromLogin.State;
    signup: fromSignup.State;
    forgotPassword: fromForgotPasword.State;
  }
  
  export interface State extends fromRoot.State {
    auth: AuthState;
  }
  
  export const reducers: ActionReducerMap<AuthState> = {
    auth: fromAuth.reducer,
    login: fromLogin.reducer,
    signup: fromSignup.reducer,
    forgotPassword: fromForgotPasword.reducer,
  };
  
  export const getAuthEntityState = createFeatureSelector<AuthState>('auth');
  
  // Auth Reducers
  export const selectAuthEntityState = createSelector(
    getAuthEntityState,
    (state: AuthState) => state.auth
  );
  export const getUserAttributes = createSelector(
    selectAuthEntityState,
    fromAuth.getUser
  );

  // Login Reducers
  export const selectLoginEntriesState = createSelector(
    getAuthEntityState,
    (state: AuthState) => state.login
  );
  export const getLoginPending = createSelector(
    selectLoginEntriesState,
    fromLogin.getLoginPending
  );
  export const getLoginError = createSelector(
    selectLoginEntriesState,
    fromLogin.getLonginError
  );
  export const getMfa = createSelector(
    selectLoginEntriesState,
    fromLogin.getMfa
  );
  export const getMfaFail = createSelector(
    selectLoginEntriesState,
    fromLogin.getMfaFail
  );
  export const getAuthenticated = createSelector(
    selectLoginEntriesState,
    fromLogin.getAuthenticated
  );

  // Signup Reducers
  export const selectSignupEntityState = createSelector(
    getAuthEntityState,
    (state: AuthState) => state.signup
  );
  export const getStepSuccess = createSelector(
    selectSignupEntityState,
    fromSignup.getStepSuccess
  );
  export const getStepError = createSelector(
    selectSignupEntityState,
    fromSignup.getStepError
  );
  export const getError = createSelector(
    selectSignupEntityState,
    fromSignup.getError
  );
  export const getNewUser = createSelector(
    selectSignupEntityState,
    fromSignup.getData
  );

  // Forgot Password Reducers
  export const selectForgotPasswordEntityState = createSelector(
    getAuthEntityState,
    (state: AuthState) => state.forgotPassword
  );
  export const getForgotPasswordPending = createSelector(
    selectForgotPasswordEntityState,
    fromForgotPasword.getForgotPasswordPending
  );
  export const getForgotPasswordError = createSelector(
    selectForgotPasswordEntityState,
    fromForgotPasword.getForgotPasswordError
  );
  export const getForgotPasswordUsername = createSelector(
    selectForgotPasswordEntityState,
    fromForgotPasword.getForgotPasswordUsername
  );
  export const getResetPasswordPending = createSelector(
    selectForgotPasswordEntityState,
    fromForgotPasword.getResetPasswordPending
  );
  export const getResetPasswordError = createSelector(
    selectForgotPasswordEntityState,
    fromForgotPasword.getResetPasswordError
  );
  export const getResetPasswordSuccess = createSelector(
    selectForgotPasswordEntityState,
    fromForgotPasword.getResetPasswordSuccess
  );
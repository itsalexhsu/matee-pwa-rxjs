import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { FormsModule }   from '@angular/forms';

import { MaterialModule } from '../material';

// Containers
import { LoginComponent } from './containers/login/login.component';
import { SignupComponent } from './containers/signup/signup.component';
import { LoginVerificationComponent } from './containers/login-verification/login-verification.component';
import { SignupPasswordComponent } from './containers/signup-password/signup-password.component';
import { SignupVerificationComponent } from './containers/signup-verification/signup-verification.component';
import { SignupNameComponent } from './containers/signup-name/signup-name.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { SignupWelcomeComponent } from './containers/signup-welcome/signup-welcome.component';

// Component
import { LoginFormComponent } from './components/login-form/login-form.component';
import { VerificationFormComponent } from './components/verification-form/verification-form.component';
import { NameFormComponent } from './components/name-form/name-form.component';
import { SignupLayoutComponent } from './components/signup-layout/signup-layout.component';
import { PhoneNumberFormComponent } from './components/phone-number-form/phone-number-form.component';
import { NewPasswordFormComponent } from './components/new-password-form/new-password-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { EmailFormComponent } from './components/email-form/email-form.component';

import { reducers } from './reducers';

// Effects
import { LoginEffects } from "./effects/login";
import { SignupEffects } from "./effects/signup";
import { AuthEffects } from "./effects/auth";

const COMPONENTS = [
  LoginComponent,
  SignupComponent,
  LoginFormComponent,
  LoginVerificationComponent,
  SignupPasswordComponent,
  SignupVerificationComponent,
  VerificationFormComponent,
  ResetPasswordFormComponent,
  SignupNameComponent,
  NameFormComponent,
  SignupLayoutComponent,
  ForgotPasswordComponent,
  PhoneNumberFormComponent,
  ResetPasswordComponent,
  NewPasswordFormComponent,
  EmailFormComponent,
  SignupWelcomeComponent,
]

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login/verification', component: LoginVerificationComponent },
  { path: 'signup/name', component: SignupNameComponent },
  { path: 'signup/password', component: SignupPasswordComponent },
  { path: 'signup/verification', component: SignupVerificationComponent },
  { path: 'signup/welcome', component: SignupWelcomeComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffects, SignupEffects, AuthEffects]),
    RouterModule.forChild(routes),
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class AuthModule {
  static forRoot() {
    return {
      ngModule: AuthModule,
      providers: []
    };
  }
}
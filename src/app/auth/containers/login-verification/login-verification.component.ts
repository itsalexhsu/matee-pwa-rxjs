import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Store } from '@ngrx/store';

import * as login from '../../actions/login'
import * as layout from '../../../core/actions/layout'
import * as fromAuth from '../../reducers/';
import { VerificationForm } from '../../models/auth.model';

@Component({
  selector: 'app-verification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-verification.component.html',
  styleUrls: ['./login-verification.component.scss']
})
export class LoginVerificationComponent implements OnInit {

  submit(form: VerificationForm) {
    this.store.dispatch(new login.MfaAttempt(form.verificationCode))
  }

  ngOnInit() {
    this.store.dispatch(new layout.HideFooter())
  }

  constructor(
    private store: Store<fromAuth.State>,
    private snack: MatSnackBar,
  ) { }

}

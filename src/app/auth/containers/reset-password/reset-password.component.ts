import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from "@angular/router";

import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as login from '../../actions/login'
import * as layout from '../../../core/actions/layout'
import * as fromAuth from '../../reducers/';

import { ResetPasswordForm } from '../../models/auth.model';

@Component({
  selector: 'app-reset-password',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  userSubscription: Subscription
  $username: Observable<string> = this.store.pipe(select(fromAuth.getForgotPasswordUsername))
  username: string

  submit(form: ResetPasswordForm) {
    let request = {username: this.username, verificationCode: form.verificationCode, password: form.password}
    this.store.dispatch(new login.ResetPassword(request))
  }

  constructor(
    private snack: MatSnackBar,
    private route: Router,
    private store: Store<fromAuth.State>,
  ) {
    this.userSubscription = this.$username
      .subscribe((res: string) => {
        this.username = res
      })
    }

  ngOnInit() {
    this.store.dispatch(new layout.HideFooter())
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe()
  }

}

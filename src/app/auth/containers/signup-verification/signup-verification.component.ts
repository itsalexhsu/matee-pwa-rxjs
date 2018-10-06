import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription, from } from 'rxjs';

import * as localStorage from 'localforage'

import * as signup from '../../actions/signup'
import * as layout from '../../../core/actions/layout'
import * as fromAuth from '../../reducers/';

import { User } from '../../models/auth.model';

@Component({
  selector: 'app-signup-verification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signup-verification.component.html',
  styleUrls: ['./signup-verification.component.scss']
})
export class SignupVerificationComponent implements OnInit {

  userSubscription: Subscription
  $user: Observable<User> = from(localStorage.getItem('temporary-user'))
  user: User

  verify(form) {
    this.store.dispatch(new signup.Verify({user: this.user, code: form.verificationCode}))
  }

  constructor(
    private store: Store<fromAuth.State>,
    private snack: MatSnackBar,
  ) {
    this.userSubscription = this.$user.subscribe((user: User) => {
      if (user) {this.user = user}
    })
  }

  ngOnInit() {
    this.store.dispatch(new layout.HideFooter())
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe()
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, from, Subscription } from 'rxjs';

import * as localStorage from 'localforage'

import * as signup from '../../actions/signup'
import * as layout from '../../../core/actions/layout'
import * as fromAuth from '../../reducers/';

import { User } from '../../models/auth.model';

@Component({
  selector: 'app-create-password',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signup-password.component.html',
  styleUrls: ['./signup-password.component.scss']
})
export class SignupPasswordComponent implements OnInit {

  actionSubscription: Subscription
  $user: Observable<User> = from(localStorage.getItem('temporary-user'))
  user: User

  submit(password) {
    this.user.password = password
    this.store.dispatch(new signup.Signup(this.user))
  }

  constructor(
    private store: Store<fromAuth.State>,
  ) {
    this.actionSubscription = this.$user.subscribe((user: User) => {
      this.user = user
    })
  }

  ngOnInit() {
    this.store.dispatch(new layout.HideFooter())
  }

  ngOnDestroy() {
    this.actionSubscription.unsubscribe()
  }

}

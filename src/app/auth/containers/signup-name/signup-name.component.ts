import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from "@angular/router";

import { Store } from '@ngrx/store';
import { Observable, from, Subscription } from 'rxjs';

import * as localStorage from 'localforage'

import * as layout from '../../../core/actions/layout'
import * as fromAuth from '../../reducers/';

import { User } from '../../models/auth.model';

@Component({
  selector: 'app-enter-name',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signup-name.component.html',
  styleUrls: ['./signup-name.component.scss']
})
export class SignupNameComponent implements OnInit {

  actionSubscription: Subscription
  $user: Observable<User> = from(localStorage.getItem('temporary-user'))
  user: User

  submit(form) {
    this.user.name = form.name
    localStorage.setItem('temporary-user', this.user)
      .then(() => this.route.navigate(['/signup/password'])
    )
  }

  constructor(
    private route: Router,
    private store: Store<fromAuth.State>,
  ) {
    this.actionSubscription = this.$user
      .subscribe((user: User) => {this.user = user})
  }

  ngOnInit() {
    this.store.dispatch(new layout.HideFooter())
  }

  ngOnDestroy() {
    this.actionSubscription.unsubscribe()
  }

}

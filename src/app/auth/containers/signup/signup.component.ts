import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from "@angular/router";

import { Store, select } from '@ngrx/store';

import * as layout from '../../../core/actions/layout'
import * as fromAuth from '../../reducers/';

import * as localStorage from 'localforage'

import { User } from '../../models/auth.model';

@Component({
  selector: 'app-signup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = new User

  signup(form) {
    this.user.email = form.email
    this.user.username = form.email
    localStorage.setItem('temporary-user', this.user)
      .then(() => this.route.navigate(['/signup/name']))
  }

  constructor(
    private route: Router,
    private store: Store<fromAuth.State>,
  ) {
    this.store.dispatch(new layout.HideFooter())
  }

  ngOnInit() { }

}

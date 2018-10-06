import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromAuth from '../../../auth/reducers';
import * as login from '../../../auth/actions/login'
import * as layout from '../../../core/actions/layout'

import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

@Component({
  selector: 'app-accounts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  user$: Observable<CognitoUserAttribute[]> = this.store.pipe(select(fromAuth.getUserAttributes))

  logout() {
    this.store.dispatch(new login.Logout())
  }

  constructor(
    private store: Store<fromAuth.State>,
  ) {
    this.store.dispatch(new layout.HideFooter)
  }

  ngOnInit() { }

}

import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as login from '../../actions/login'
import * as layout from '../../../core/actions/layout'
import * as fromAuth from '../../reducers/';

import { LoginForm, Auth } from '../../models/auth.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  $pending: Observable<boolean> = this.store.pipe(select(fromAuth.getLoginPending))

  login($form: LoginForm) {
    let authRequest: Auth = {username: $form.email, password: $form.password}
    this.store.dispatch(new login.Login(authRequest))
  }

  constructor(
    private store: Store<fromAuth.State>,
  ) {
    this.store.dispatch(new layout.HideFooter())
  }

}

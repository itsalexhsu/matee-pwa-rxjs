import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';

import * as login from '../../actions/login'
import * as layout from '../../../core/actions/layout'
import * as fromAuth from '../../reducers/';

@Component({
  selector: 'app-forgot-password',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  submit(form) {
    this.store.dispatch(new login.ForgotPassword(form.email))
  }

  constructor(
    private store: Store<fromAuth.State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new layout.HideFooter())
  }

}

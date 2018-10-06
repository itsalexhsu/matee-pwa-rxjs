import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { FindUserAttributeValue } from '../../../shared/utils';

import * as fromAuth from '../../../auth/reducers';
import * as fromRoot from '../../../reducers';
import * as auth from '../../../auth/actions/auth';
import * as layout from '../../actions/layout';
import * as cartButton from '../../actions/cart-button';
import * as pouchDB from '../../actions/pouchdb';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user$: Observable<CognitoUserAttribute[]> = this.store.pipe(select(fromAuth.getUserAttributes))
  isLoggedIn$: Observable<boolean> = this.store.pipe(select(fromAuth.getAuthenticated))
  showFooter$: Observable<boolean> = this.store.pipe(select(fromRoot.getShowFooter))
  showCartButton$: Observable<boolean> = this.store.pipe(select(fromRoot.getCartButton))

  ngOnInit() {
    this.store.dispatch(new layout.ShowFooter)
    this.store.dispatch(new cartButton.ShowButton)

    this.isLoggedIn$
    .pipe(map(payload => payload))
    .subscribe(loggedIn => {
      if (loggedIn) {
        this.store.dispatch(new auth.LoadUser)
      }
    })

    this.user$
    .pipe(map(payload => payload))
    .subscribe(params => {
      if (params) {
        this.store.dispatch(new pouchDB.SyncDB())
      }
    })

  }

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

}

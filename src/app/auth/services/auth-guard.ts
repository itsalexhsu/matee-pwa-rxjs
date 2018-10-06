import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import * as PouchDB from '../../core/actions/pouchdb';
import * as Login from '../actions/login';
import * as fromAuth from '../reducers';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getAuthenticated),
      map(authed => {
        if (!authed) {
          this.store.dispatch(new Login.LoginRedirect);
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}

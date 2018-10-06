import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { FindUserAttributeValue } from '../../shared/utils';

import * as pouchDB from '../../core/actions/pouchdb';

import * as fromAuth from '../../auth/reducers';
import * as fromRoot from '../../reducers';
import * as auth from '../../auth/actions/auth';

// import PouchDB from 'pouchdb';
import PouchDB from 'pouchdb-browser';
import PouchAuth from 'pouchdb-authentication'
import pouchdbDebug from 'pouchdb-debug'
PouchDB.plugin(PouchAuth)
PouchDB.plugin(pouchdbDebug)

import { environment } from '../../../environments/environment';

import * as resource from "../../entries/actions/resource";

@Injectable({
  providedIn: 'root'
})
export class PouchdbService {

  private user$: Observable<CognitoUserAttribute[]> = this.store.pipe(select(fromAuth.getUserAttributes))
  private isInstantiated: boolean;
  private database: any;
  private replicator: any;
  private id: string;

  private username: string = 'pwa_admin'
  private password: string = '7zuuusfhuiH7KqYvZsbb'

  public fetch() {
      return this.database.allDocs({
        include_docs: true,
        descending: true,
      });
  }

  public get(id: string) {
      return this.database.get(id);
  }

  public getAttachment(docId: string, attachmentId: string) {
    return this.database.getAttachment(docId, attachmentId)
  }

  public put(id: string, document: any) {
    return new Promise(() => {
      return this.get(id).then(result => {
          document._rev = result._rev;
          this.database.put(document).then(() => {
            this.store.dispatch(new resource.CreateSuccess(document))
          })
      }, error => {
          if(error.status == "404") {
              this.database.put(document).then(() => {
                this.store.dispatch(new resource.CreateSuccess(document))
              })
          } else {
            this.store.dispatch(new resource.CreateFail(error))
          }
      });
    })
  }

  public replicateTo() {
    return new Promise(() => {
      if (this.id) {
        let URL = 'https://couchdb.thatmoment.app:6984/userdb_' + this.id
        let remoteDatabase = new PouchDB(URL, {
          auth: {
            username: this.username,
            password: this.password,
          }
        })
        this.database.replicate.to(remoteDatabase)
        .on('error', error => {this.store.dispatch(new pouchDB.ReplicateToFail(error))})
        .on('complete', complete => {this.store.dispatch(new pouchDB.ReplicateToSuccess(complete))})
      }
    })
  }

  public sync() {
    return new Promise(() => {
      if (this.id) {
        let URL = 'https://couchdb.thatmoment.app:6984/userdb_' + this.id
        let remoteDatabase = new PouchDB(URL, {
          auth: {
            username: this.username,
            password: this.password,
          }
        })
        this.replicator = this.database.sync(remoteDatabase, {
          live: true,
          retry: true
        })
        .on('change', change => {this.store.dispatch(new pouchDB.SyncDBChange(change))})
        .on('error', error => {this.store.dispatch(new pouchDB.SyncDBFail(error))})
        .on('pause', pause => {this.store.dispatch(new pouchDB.SyncDBPause(pause))})
      }
    })
  }

  public cancel() {
    return new Promise(() => {
      if (this.replicator) {
        this.replicator.cancel()
        this.replicator.on('complete', complete => {
          this.store.dispatch(new pouchDB.SyncDBCancelSuccess(complete))
        })
      }
    })
  }

  public destroy() {
    return new Promise(() => {
      this.database.destroy().then(() => {
        this.store.dispatch(new pouchDB.DestroyDBSuccess())
      })
      .catch(err => {
        this.store.dispatch(new pouchDB.DestroyDBFail(err))
      })
    })
  }

  public constructor(
    private store: Store<fromRoot.State>,
  ) {

    if(!environment.production) {
      PouchDB.debug.enable('*')
    }

    if(!this.isInstantiated) {
        this.database = new PouchDB('userdb_local', {
          adapter: 'idb',
          auto_compaction: true,
          size: 100,
        });
        this.isInstantiated = true;
    }

    this.user$
    .pipe(map(payload => payload))
    .subscribe(params => {
      if (params) {
        this.id = FindUserAttributeValue('sub', params)
      }
    })

  }
  
}

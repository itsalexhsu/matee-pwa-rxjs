import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';

import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as fromEntries from '../../reducers/';
import * as blends from '../../actions/blends';

import { PouchdbService } from '../../../core/services/pouchdb';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.scss']
})
export class ResourceDetailComponent {

  blend$: Observable<any[]> = this.store.pipe(select(fromEntries.getBlendResult))

  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store<fromEntries.State>) {
      this.activeRoute.params
      .pipe(map(params => new blends.Load(params.id)))
      .subscribe(store)
    }

}

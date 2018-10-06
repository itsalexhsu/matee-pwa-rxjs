import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription, from } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromEntries from '../../reducers/';
import * as resource from '../../actions/resource';
import * as layout from '../../../core/actions/layout';

import { Resource } from "../../models/resource.model";

@Component({
  selector: 'app-view-resource',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './view-resource.component.html',
  styleUrls: ['./view-resource.component.scss']
})
export class ViewResourceComponent implements OnInit {

  $resource: Observable<Resource>
  $photo: Observable<any>

  ngOnInit() {
    // this.$resource = this.store.pipe(select(fromEntries.getResource))
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store<fromEntries.State>) {
      store.dispatch(new layout.HideFooter())
    }
}

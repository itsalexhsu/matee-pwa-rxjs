import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription, from } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromEntries from '../../reducers/';
import * as layout from '../../../core/actions/layout';

@Component({
  selector: 'app-product',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  ngOnInit() {
      this.store.dispatch(new layout.HideFooter())
      this.store.dispatch(new layout.ShowAddItemButton())
  }

  ngOnDestroy() {
      this.store.dispatch(new layout.HideAddItemButton())
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store<fromEntries.State>) { }
}
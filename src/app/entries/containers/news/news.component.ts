import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { tap, map, mergeMap } from 'rxjs/operators';

import { Observable } from 'rxjs';

import * as fromRoot from '../../../reducers/';
import * as fromEntries from '../../reducers/';
import * as layout from '../../../core/actions/layout';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  ngOnInit() {

  }

  constructor(
    private store: Store<fromEntries.State>,
  ) {
    this.store.dispatch(new layout.ShowFooter())
    this.store.dispatch(new layout.ShowCartButton())
  }

}

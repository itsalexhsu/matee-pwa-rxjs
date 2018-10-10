import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { tap, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as fromEntries from '../../reducers/';
import * as product from '../../actions/product';
import * as layout from '../../../core/actions/layout';

@Component({
  selector: 'app-blends',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blends.component.html',
  styleUrls: ['./blends.component.scss']
})
export class BlendsComponent implements OnInit {

  blends$: Observable<any[]> = this.store.pipe(select(fromEntries.getBlendsResult))

  constructor(
    private store: Store<fromEntries.State>,
  ) {
    this.store.dispatch(new layout.ShowFooter())
    this.store.dispatch(new layout.showCartButton())
    this.store.dispatch(new layout.hideAddItemButton())
    this.store.dispatch(new product.List())
  }

  ngOnInit() {
  }

}
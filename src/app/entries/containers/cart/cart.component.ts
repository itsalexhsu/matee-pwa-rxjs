import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { tap, map, mergeMap } from 'rxjs/operators';

import { Observable } from 'rxjs';

import * as fromRoot from '../../../reducers/';
import * as fromEntries from '../../reducers/';
import * as resource from '../../actions/resource';
import * as layout from '../../../core/actions/layout';
import * as cartButton from '../../../core/actions/cart-button';

@Component({
  selector: 'app-cart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private store: Store<fromEntries.State>,
  ) {
    this.store.dispatch(new layout.HideFooter())
    this.store.dispatch(new cartButton.HideButton())
  }

  ngOnInit() {
  }

}
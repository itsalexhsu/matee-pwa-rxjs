import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as fromEntries from '../../reducers/';
import * as layout from '../../../core/actions/layout';

@Component({
  selector: 'app-ingredient-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {

  constructor(
    private store: Store<fromEntries.State>,
  ) {
    this.store.dispatch(new layout.HideFooter())
  }

  ngOnInit() {
  }

}

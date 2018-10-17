import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from "@angular/router";

import { Store, select } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';

import * as productTab from '../../../core/actions/product-tab';
import * as layout from '../../../core/actions/layout';
import * as product from '../../actions/product';
import * as ingredient from '../../actions/ingredient';
import * as fromProducts from '../../reducers/';

@Component({
  selector: 'app-ingredient-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent {

  ingredients$: Observable<any> = this.store.pipe(select(fromProducts.getIngredients))
  selected$: Observable<any> = this.store.pipe(select(fromProducts.getSelectedIngredients))
  
  selectedIngredients = []

  constructor(
    private store: Store<fromProducts.State>,
    private route: Router,
  ) {
    this.store.dispatch(new layout.HideFooter())
    this.store.dispatch(new layout.HideFab)
  }

  ngOnInit() {
    this.store.dispatch(new ingredient.Load())
    this.store.dispatch(new productTab.SelectTab(1))
  }

  ngOnDestroy() {
    this.store.dispatch(new layout.ShowFab)
  }

  onCheck(event) {
    if (event.checked) {
      this.selectedIngredients.push(event.ingredient)
    } else {
      let i = this.selectedIngredients.indexOf(event.ingredient)
      if (i != -1) {
        this.selectedIngredients.splice(i, 1)
      }
    }
  }

  onSubmit(event) {
    if (event) {
      this.store.dispatch(new ingredient.SelectIngredients(this.selectedIngredients))
      this.route.navigate(['/products'])
    }
  }

}

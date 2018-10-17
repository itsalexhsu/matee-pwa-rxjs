import { Component, Input } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as fromProducts from '../../reducers/';
import * as lambda from '../../actions/lambda';
import * as product from '../../actions/product';
import * as layout from '../../../core/actions/layout';

import { Product } from 'src/app/shared';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  selectedIngredients$: Observable<any[]> = this.store.pipe(select(fromProducts.getSelectedIngredients))
  product$: Observable<Product> = this.store.pipe(select(fromProducts.getProductResult))

  constructor(
    private store: Store<fromProducts.State>
  ) { }

  onSizeSelect(event) {
    if (event) {
      this.store.dispatch(new product.SelectVariant(event))
    }
  }

  ngOnInit() {
    this.store.dispatch(new layout.ShowAddItemButton)
    this.store.dispatch(new product.Load('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE3MDMzMTc2MzUxMzk='))

    this.selectedIngredients$
    .pipe(map(payload => payload))
    .subscribe(res => {
      if (res) {
        this.store.dispatch(new layout.EnableAddItemButton)
      } else {
        this.store.dispatch(new layout.DisableAddItemButton)
      }
    })
  }

  ngOnDestroy() {
    this.store.dispatch(new layout.HideAddItemButton)
  }

}
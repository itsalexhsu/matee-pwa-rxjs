import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';

import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as fromProducts from '../../reducers/';
import * as layout from '../../../core/actions/layout';
import * as product from '../../actions/product';
import * as lambda from '../../actions/lambda';

import { Product, LineItem } from 'src/app/shared';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  product$: Observable<Product> = this.store.pipe(select(fromProducts.getProductResult))
  lambdaProduct$: Observable<any> = this.store.pipe(select(fromProducts.getLambdaProductResult))
  index: number

  ngOnInit() {
      this.store.dispatch(new layout.HideFooter())
      this.store.dispatch(new layout.ShowAddItemButton())
  }

  ngOnDestroy() {
      this.store.dispatch(new layout.HideAddItemButton())
      this.store.dispatch(new layout.DisableAddItemButton)
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store<fromProducts.State>) {

    this.activeRoute.params
      .pipe(map(payload => payload))
      .subscribe(params => {
        this.store.dispatch(new product.Load(params.id))
        this.store.dispatch(new lambda.Load(params.id))
      })

    }

  onSizeSelect(event) {
    if (event) {
      this.store.dispatch(new product.SelectVariant(event))
      this.store.dispatch(new layout.EnableAddItemButton)
    }
  }
    
}
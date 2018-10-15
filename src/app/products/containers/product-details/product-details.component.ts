import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';

import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as layout from '../../../core/actions/layout';
import * as product from '../../actions/product';
import * as lambda from '../../actions/lambda';
import * as fromProducts from '../../reducers/';

import { Product, LineItem } from 'src/app/shared';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {

  product$: Observable<Product> = this.store.pipe(select(fromProducts.getProductResult))
  lambdaProduct$: Observable<any> = this.store.pipe(select(fromProducts.getLambdaProductResult))
  index: number

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
      }
    }

}

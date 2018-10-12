import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';

import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as layout from '../../../core/actions/layout';
import * as product from '../../actions/product';
import * as fromEntries from '../../reducers/';

import { Product, LineItem } from 'src/app/shared';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {

  product$: Observable<Product> = this.store.pipe(select(fromEntries.getBlendResult))
  index: number

  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store<fromEntries.State>) {
      this.activeRoute.params
      .pipe(map(params => new product.Load(params.id)))
      .subscribe(store)
    }

    onSizeSelect(event) {
      if (event) {
        this.store.dispatch(new product.SelectVariant(event))
      }
    }

}

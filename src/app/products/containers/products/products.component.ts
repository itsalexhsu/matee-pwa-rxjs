import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { tap, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as fromRoot from '../../../reducers';
import * as fromProducts from '../../reducers/';
import * as product from '../../actions/product';
import * as layout from '../../../core/actions/layout';

@Component({
  selector: 'app-products',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<any[]> = this.store.pipe(select(fromProducts.getProductsResult))
  activeTab$: Observable<number> = this.store.pipe(select(fromRoot.getActiveTab))

  constructor(
    private store: Store<fromProducts.State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new product.List())
    this.store.dispatch(new layout.HideFooter())
    this.store.dispatch(new layout.ShowCartButton())
  }

}

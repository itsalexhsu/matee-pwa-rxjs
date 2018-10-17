import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { tap, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as fromRoot from '../../../reducers';
import * as fromProducts from '../../reducers/';
import * as product from '../../actions/product';
import * as layout from '../../../core/actions/layout';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent {

  products$: Observable<any[]> = this.store.pipe(select(fromProducts.getProductsResult))

  constructor(
    private store: Store<fromProducts.State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new product.List())
    this.store.dispatch(new layout.ShowFooter())
  }

}

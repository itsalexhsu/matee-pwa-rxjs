import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';

import { Store, select } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { Observable, timer, interval } from 'rxjs';

import * as fromProducts from '../../reducers/';
import * as layout from '../../../core/actions/layout';
import * as productTab from '../../../core/actions/product-tab';
import * as product from '../../actions/product';
import * as lambda from '../../actions/lambda';

import { Product, LineItem } from 'src/app/shared';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent {

  product$: Observable<Product> = this.store.pipe(select(fromProducts.getProductResult))
  lambdaProduct$: Observable<any> = this.store.pipe(select(fromProducts.getLambdaProductResult))

  counter$: Observable<any> = null
  steepTime: number
  counting: boolean = false

  ngOnInit() {
    this.store.dispatch(new layout.ShowFooter())

    this.lambdaProduct$
    .pipe(map(payload => payload))
    .subscribe(product => {
      if (product) {
        this.steepTime = product.SteepTime
      }
    })
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
    
    toggleCounter() {

      if (!this.counting) {
        let currentCount = this.steepTime
        this.counter$ = timer(0, 1000).pipe(
          take(currentCount),
          map(() => {
            if (currentCount === 0) {
              this.counting = false
              return 0
            } else {
              return currentCount -= 1000
            }
          })
        )
      }

      this.counting = !this.counting
    }

}
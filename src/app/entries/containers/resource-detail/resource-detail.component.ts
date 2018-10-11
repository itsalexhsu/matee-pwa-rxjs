import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';

import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as layout from '../../../core/actions/layout';
import * as fromEntries from '../../reducers/';
import * as product from '../../actions/product';
import { Product } from 'src/app/shared';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourceDetailComponent {

  blend$: Observable<Product> = this.store.pipe(select(fromEntries.getBlendResult))

  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store<fromEntries.State>) {
      this.store.dispatch(new layout.showAddItemButton())
      this.activeRoute.params
      .pipe(map(params => new product.Load(params.id)))
      .subscribe(store)
    }

    onSizeSelect(event) {
      console.log(event)
    }

}

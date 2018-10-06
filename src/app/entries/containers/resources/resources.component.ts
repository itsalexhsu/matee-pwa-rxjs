import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { tap, map, mergeMap } from 'rxjs/operators';

import { Observable } from 'rxjs';

import * as fromRoot from '../../../reducers/';
import * as fromEntries from '../../reducers/';
import * as resource from '../../actions/resource';
import * as layout from '../../../core/actions/layout';
import * as cartButton from '../../../core/actions/cart-button';

import { Resource } from '../../models/resource.model'

@Component({
  selector: 'app-resources',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  resources$: Observable<Resource[]> = this.store.pipe(select(fromEntries.getAllSavedResources))

  ngOnInit() {

  }

  constructor(
    private store: Store<fromEntries.State>,
  ) {
    this.store.dispatch(new layout.ShowFooter())
    this.store.dispatch(new cartButton.ShowButton())
    this.store.dispatch(new resource.LoadAll)
  }

}

import { Component } from '@angular/core'
import { Router } from "@angular/router";

import * as localStorage from 'localforage'

import { Observable, from } from "rxjs";
import { Store } from '@ngrx/store';

import * as fromEntry from '../../reducers'
import * as layout from '../../../core/actions/layout'

import { Resource } from "../../models/resource.model";

@Component({
  selector: 'app-edit-resource-photo',
  templateUrl: './edit-resource-photo.component.html',
  styleUrls: ['./edit-resource-photo.component.scss']
})
export class EditResourcePhotoComponent {

  $resource: Observable<Resource> = from(localStorage.getItem<Resource>('temporary-resource'))

  createNewResource(event: string) {
    this.route.navigate(['/add-image'])
  }

  cancel(event: boolean) {
    this.route.navigate([''])
  }

  constructor(
    private store: Store<fromEntry.State>,
    private route: Router,
  ) {
    this.store.dispatch(new layout.HideFooter())
  }

}

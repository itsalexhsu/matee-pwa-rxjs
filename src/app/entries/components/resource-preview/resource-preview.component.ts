import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Resource } from '../../models/resource.model';

import { Store } from '@ngrx/store';

import { Observable, from } from 'rxjs';

import * as fromEntries from '../../reducers/';

import { PouchdbService } from '../../../core/services/pouchdb';

@Component({
  selector: 'app-resource-preview',
  templateUrl: './resource-preview.component.html',
  styleUrls: ['./resource-preview.component.scss']
})
export class ResourcePreviewComponent {

  $thumbnail: Observable<any>
  @Input() resource: Resource

  get id() {
    return this.resource._id
  }

  get title() {
    return this.resource.meta.caption
  }

  get createdAt() {
    return this.resource.createdAt
  }

  get status() {
    return this.resource.status
  }

  ngOnInit() {
    this.$thumbnail = from(this.pouchDb.getAttachment(this.resource._id, 'thumbnail'))
  }

  constructor(
    private domSanitizer: DomSanitizer,
    private store: Store<fromEntries.State>,
    private pouchDb: PouchdbService,
  ) { }

}
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';

import { Store } from '@ngrx/store';
import { from } from 'rxjs';

import * as fromEntries from '../../reducers/';
import * as resource from '../../actions/resource';

import { Resource } from '../../models/resource.model';

import { ArchiveConfirmationComponent } from '../../dialog/archive-confirmation/archive-confirmation.component'

import { PouchdbService } from '../../../core/services/pouchdb';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.scss']
})
export class ResourceDetailComponent {

  constructor(
    private domSanitizer: DomSanitizer,
    private store: Store<fromEntries.State>,
    private dialog: MatDialog,
    private pouchDb: PouchdbService,
  ) { }

}

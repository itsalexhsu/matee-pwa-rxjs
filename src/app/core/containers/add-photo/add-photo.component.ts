import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";

import * as localStorage from 'localforage'

import { from } from 'rxjs';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';

import { Resource } from "../../../entries/models/resource.model";

import { OrientationPipe } from "../../../shared/pipes/resetOrientation";
import { ToBase64Pipe } from "../../../shared/pipes/fileToBase64";
import { GetExif, Id } from "../../../shared/utils";

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss']
})
export class AddPhotoComponent {

  @ViewChild('input') fileInput: ElementRef

  resource: Resource

  addPhoto(event) {

    let file = event.target.files[0]
    let blob = file.slice(0, file.size, file.type)

    let subscriptions = this.orientation.transform(blob).pipe(
      map(newBlob => newBlob),
      mergeMap(newBlob => 
        this.toBase64.transform(newBlob).pipe(
          map(base64 => base64)
        )
      )
    ).pipe(
      withLatestFrom(from(GetExif(blob))),
      map(([base64, exif]) => {
        return {base64, exif}
      })
    )

    subscriptions.subscribe(res => {
      let resource: Resource = {
        _id: 'resource/photo/' + Date.now().toString() + '/' + Id(),
        _attachments: {photo: {content_type: file.type, data: res.base64}},
        createdAt: Date.now(),
        meta: {exif: res.exif},
        type: 'photo',
        status: 'draft'
      }
      from(localStorage.setItem('temporary-resource', resource))
      .pipe(map(stored => stored))
      .subscribe(() => {this.route.navigate(['/edit-photo'])})
    })

  }

  constructor(
    private orientation: OrientationPipe,
    private toBase64: ToBase64Pipe,
    private route: Router,
  ) {
    localStorage.config({
      driver: localStorage.WEBSQL,
      size: 50000000
    })
  }

}

import { Component, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Resource } from '../../models/resource.model';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-frame',
  templateUrl: './image-frame.component.html',
  styleUrls: ['./image-frame.component.scss']
})
export class ImageFrameComponent {

  @ViewChild('img') img: ElementRef
  @Input() resource: Resource
  @Output() newImage = new EventEmitter<string>()
  @Output() cancel = new EventEmitter<boolean>()

  get image() {
    let dataUrl = 'data:' + this.resource._attachments.photo.content_type + ';base64,' + this.resource._attachments.photo.data
    return dataUrl
  }

  constructor(private domSanitizer: DomSanitizer) { }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-blends',
  templateUrl: './featured-blends.component.html',
  styleUrls: ['./featured-blends.component.scss']
})
export class FeaturedBlendsComponent {

  @Input() blend: any

  get id() {
    return this.blend.id
  }

  get title() {
    return this.blend.title
  }

  get description() {
    return this.blend.description
  }

  get image() {
    return this.blend.images[0].src
  }

  get altText() {
    return this.blend.images[0].altText
  }

  constructor() { }

  ngOnInit() {
  }

}

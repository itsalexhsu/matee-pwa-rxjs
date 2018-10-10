import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared';

@Component({
  selector: 'app-blend-detail',
  templateUrl: './blend-detail.component.html',
  styleUrls: ['./blend-detail.component.scss']
})
export class BlendDetailComponent {

  @Input() blend: Product

  @Output() addToCart = new EventEmitter()
  @Output() toggleFavorite = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  get id() {
    if (this.blend) {
      return this.blend.id
    }
  }

  get title() {
    if (this.blend) {
      return this.blend.title
    }
  }

  get description() {
    if (this.blend) {
      return this.blend.description
    }
  }

  get image() {
    if (this.blend) {
      return this.blend.images[0].src
    }
  }

  get altText() {
    if (this.blend) {
      return this.blend.images[0].altText
    }
  }

  onAddToCart(event) {
    this.addToCart.emit(event)
  }

  onToggleFavorite(event) {
    this.toggleFavorite.emit(event)
  }

}

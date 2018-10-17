import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  @Input() id: string
  @Input() title: string
  @Input() description: string
  @Input() image: string
  @Input() altText: string
  @Input() isFavorite: boolean

  @Input() showAddToCart: boolean
  @Input() showRemoveFromCart: boolean
  @Input() showFavorite: boolean

  @Output() addToCart = new EventEmitter()
  @Output() removeFromCart = new EventEmitter()
  @Output() toggleFavorite = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onAddToCartClick(event) {
    this.addToCart.emit(event)
  }

  onRemoveFromCartClick(event) {
    this.removeFromCart.emit(event)
  }

  onToggleFavoriteClick(event) {
    this.toggleFavorite.emit(event)
  }

}

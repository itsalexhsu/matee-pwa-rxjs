import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-blend-card',
  templateUrl: './blend-card.component.html',
  styleUrls: ['./blend-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlendCardComponent {

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

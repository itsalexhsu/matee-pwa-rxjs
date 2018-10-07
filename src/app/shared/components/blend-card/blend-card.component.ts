import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blend-card',
  templateUrl: './blend-card.component.html',
  styleUrls: ['./blend-card.component.scss']
})
export class BlendCardComponent {

  @Input() id: string
  @Input() description: string
  @Input() title: string
  @Input() image: string
  @Input() altText: string

  @Input() showAddItem: boolean
  @Input() showAddFavorite: boolean
  @Input() showRemoveFavorite: boolean

  @Output() AddItemId = new EventEmitter()
  @Output() AddFavoriteId = new EventEmitter()
  @Output() RemoveFavoriteId = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-size-card',
  templateUrl: './select-size-card.component.html',
  styleUrls: ['./select-size-card.component.scss']
})
export class SelectSizeCardComponent {

  @Input() product: any

  @Output() selected = new EventEmitter()

  selectedIndex: number = 0

  constructor() {
  }

  onChipClick(variant, index) {
    this.selectedIndex = index
    this.selected.emit(variant)
  }

  ngOnChanges() {
    this.selected.emit(this.product.variants[0])
  }

}

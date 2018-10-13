import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-variant',
  templateUrl: './select-variant.component.html',
  styleUrls: ['./select-variant.component.scss']
})
export class SelectVariantComponent {

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

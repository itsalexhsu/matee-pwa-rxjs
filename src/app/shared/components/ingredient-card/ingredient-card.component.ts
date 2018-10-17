import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientCardComponent {

  @Input() name: string
  @Input() effects
  @Input() flavors
  @Input() showAddIngredient: boolean
  @Input() isChecked: boolean

  @Output() onIngredientCheck = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onCheck(event) {
    this.onIngredientCheck.emit(event)
  }

}

import { Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}

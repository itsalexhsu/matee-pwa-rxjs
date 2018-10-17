import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as fromProducts from '../../reducers/';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class IngredientComponent {

  @Input() ingredient: any
  @Input() selected: any

  @Output() onIngredientCheck = new EventEmitter

  constructor(private store: Store<fromProducts.State>) { }

  ngOnInit() {
  }
 
  get name() {
    if (this.ingredient) {
      return this.ingredient.Name
    }
  }

  get effects() {
    if (this.ingredient) {
      return this.ingredient.Effects
    }
  }

  get flavors() {
    if (this.ingredient) {
      return this.ingredient.Flavors
    }
  }

  onCheck(event) {
    let payload = { ingredient: this.ingredient, checked: event.checked}
    this.onIngredientCheck.emit(payload)
  }

}
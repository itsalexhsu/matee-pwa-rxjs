import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '../material';

// Components
import { IngredientCardComponent } from './components/ingredient-card/ingredient-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

const CONTAINER = [
IngredientCardComponent,
ProductCardComponent,
]

@NgModule({
    imports: [
      MaterialModule,
      CommonModule,
      RouterModule,
      EffectsModule.forFeature([]),
    ],
    declarations: [CONTAINER],
    exports: [CONTAINER]
  })
  export class SharedModule {
    static forRoot() {
      return {
        ngModule: SharedModule,
        providers: []
      };
    }
  }
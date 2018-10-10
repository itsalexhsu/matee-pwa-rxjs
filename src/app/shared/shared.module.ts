import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '../material';

// Components
import { BlendCardComponent } from './components/blend-card/blend-card.component';

const CONTAINER = [
BlendCardComponent,
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
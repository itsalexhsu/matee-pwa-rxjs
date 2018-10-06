import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '../material';

import { FooterComponent } from './components/footer/footer.component';
import { FooterItemComponent } from './components/footer-item/footer-item.component';
import { LayoutComponent } from './components/layout/layout.component';

import { AddPhotoComponent } from './containers/add-photo/add-photo.component';
import { AppComponent } from './containers/app/app.component';

// Effects
import { SnackbarEffects } from "./effects/snackbar";
import { PouchDbEffects } from "./effects/pouchdb";
import { CartButtonComponent } from './components/cart-button/cart-button.component';

const CONTAINER = [
  FooterComponent,
  FooterItemComponent,
  LayoutComponent,
  AppComponent,
  AddPhotoComponent,
]

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([SnackbarEffects, PouchDbEffects]),
  ],
  declarations: [CONTAINER, CartButtonComponent],
  exports: [CONTAINER]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
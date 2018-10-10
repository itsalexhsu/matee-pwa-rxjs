import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material';
import { SharedModule } from '../shared/shared.module';

import { AppComponent } from './containers/app/app.component';
import { CartComponent } from './containers/cart/cart.component';
import { CartItemsComponent } from './containers/cart-items/cart-items.component';

import { FooterComponent } from './components/footer/footer.component';
import { FooterItemComponent } from './components/footer-item/footer-item.component';
import { FabComponent } from './components/fab/fab.component';
import { FabItemComponent } from './components/fab-item/fab-item.component';
import { LayoutComponent } from './components/layout/layout.component';

// Effects
import { CartEffects } from "./effects/cart";
import { CheckoutEffects } from "./effects/checkout";
import { SnackbarEffects } from "./effects/snackbar";

const CONTAINER = [
  FooterComponent,
  FooterItemComponent,
  LayoutComponent,
  AppComponent,
  FabComponent,
  FabItemComponent,
  CartItemsComponent,
  CartComponent,
]

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    SharedModule,
    EffectsModule.forFeature([SnackbarEffects, CartEffects, CheckoutEffects]),
  ],
  declarations: [CONTAINER],
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
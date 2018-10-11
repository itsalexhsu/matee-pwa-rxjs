import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//Effects
import { BlendsEffects } from "./effects/blends";

//Containers
import { IngredientListComponent } from './containers/ingredient-list/ingredient-list.component';
import { ProductsComponent } from './containers/products/products.component';
import { ProductComponent } from './containers/product/product.component';
import { ProductDetailsComponent } from './containers/product-details/product-details.component';
import { FeaturedProductsComponent } from './containers/featured-products/featured-products.component';
import { NewsComponent } from './containers/news/news.component';

//Components
import { PreviousBlendsComponent } from './components/previous-blends/previous-blends.component';
import { CreateBlendsComponent } from './components/create-blends/create-blends.component';
import { FavoriteBlendsComponent } from './components/favorite-blends/favorite-blends.component';
import { BlendSummaryComponent } from './components/blend-summary/blend-summary.component';
import { SelectSizeCardComponent } from './components/select-size-card/select-size-card.component';
import { BlendDetailComponent } from './components/blend-detail/blend-detail.component';

import { ArchiveConfirmationComponent } from './dialog/archive-confirmation/archive-confirmation.component';

import { MaterialModule } from '../material';

import { reducers } from './reducers';
import { routes } from './routes';

import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  ArchiveConfirmationComponent,
  IngredientListComponent,
  PreviousBlendsComponent,
  CreateBlendsComponent,
  FavoriteBlendsComponent,
  BlendSummaryComponent,
  SelectSizeCardComponent,
  BlendDetailComponent,
  ProductsComponent,
  ProductComponent,
  ProductDetailsComponent,
  FeaturedProductsComponent,
  NewsComponent,
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('entries', reducers),
    EffectsModule.forFeature([BlendsEffects]),
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  entryComponents: [ArchiveConfirmationComponent],
})
export class EntriesModule {
  static forRoot() {
    return {
      ngModule: EntriesModule,
      providers: []
    };
  }
}
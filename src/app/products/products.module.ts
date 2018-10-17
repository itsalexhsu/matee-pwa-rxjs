import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//Effects
import { ProductsEffects } from "./effects/products";
import { LambdaProductsEffects } from "./effects/lambda";
import { IngredientEffects } from "./effects/ingredient";

//Containers
import { IngredientListComponent } from './containers/ingredient-list/ingredient-list.component';
import { ProductsComponent } from './containers/products/products.component';
import { ProductComponent } from './containers/product/product.component';
import { FeaturedProductComponent } from './containers/featured-product/featured-product.component';
import { NewsComponent } from './containers/news/news.component';
import { CreateProductComponent } from './containers/create-product/create-product.component';

//Components
import { FavoriteProductComponent } from './components/favorite-product/favorite-product.component';
import { PreviousProductComponent } from './components/previous-product/previous-product.component';
import { SelectVariantComponent } from './components/select-variant/select-variant.component';
import { ProductDetailSummaryComponent } from './components/product-detail-summary/product-detail-summary.component';
import { ProductDetailBrewingGuideComponent } from './components/product-detail-brewing-guide/product-detail-brewing-guide.component';
import { ProductDetailIngredientsComponent } from './components/product-detail-ingredients/product-detail-ingredients.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';

import { ArchiveConfirmationComponent } from './dialog/archive-confirmation/archive-confirmation.component';

import { MaterialModule } from '../material';

import { reducers } from './reducers';
import { routes } from './routes';

import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  ArchiveConfirmationComponent,
  IngredientListComponent,
  CreateProductComponent,
  FavoriteProductComponent,
  PreviousProductComponent,
  SelectVariantComponent,
  ProductsComponent,
  ProductComponent,
  FeaturedProductComponent,
  NewsComponent,
  ProductDetailSummaryComponent,
  ProductDetailBrewingGuideComponent,
  ProductDetailIngredientsComponent,
  IngredientComponent
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature([ProductsEffects, LambdaProductsEffects, IngredientEffects]),
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  entryComponents: [ArchiveConfirmationComponent],
})
export class ProductsModule {
  static forRoot() {
    return {
      ngModule: ProductsModule,
      providers: []
    };
  }
}
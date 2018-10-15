import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//Effects
import { ProductsEffects } from "./effects/products";
import { LambdaProductsEffects } from "./effects/lambda";

//Containers
import { IngredientListComponent } from './containers/ingredient-list/ingredient-list.component';
import { ProductsComponent } from './containers/products/products.component';
import { ProductComponent } from './containers/product/product.component';
import { ProductDetailsComponent } from './containers/product-details/product-details.component';
import { FeaturedProductComponent } from './containers/featured-product/featured-product.component';
import { NewsComponent } from './containers/news/news.component';

//Components
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FavoriteProductComponent } from './components/favorite-product/favorite-product.component';
import { PreviousProductComponent } from './components/previous-product/previous-product.component';
import { SelectVariantComponent } from './components/select-variant/select-variant.component';
import { ProductDetailSummaryComponent } from './components/product-detail-summary/product-detail-summary.component';
import { ProductDetailBrewingGuideComponent } from './components/product-detail-brewing-guide/product-detail-brewing-guide.component';

import { ArchiveConfirmationComponent } from './dialog/archive-confirmation/archive-confirmation.component';

import { MaterialModule } from '../material';

import { reducers } from './reducers';
import { routes } from './routes';

import { SharedModule } from '../shared/shared.module';
import { ProductDetailIngredientsComponent } from './components/product-detail-ingredients/product-detail-ingredients.component';

const COMPONENTS = [
  ArchiveConfirmationComponent,
  IngredientListComponent,
  CreateProductComponent,
  FavoriteProductComponent,
  PreviousProductComponent,
  SelectVariantComponent,
  ProductsComponent,
  ProductComponent,
  ProductDetailsComponent,
  FeaturedProductComponent,
  NewsComponent,
  ProductDetailSummaryComponent,
  ProductDetailBrewingGuideComponent,
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature([ProductsEffects, LambdaProductsEffects]),
  ],
  declarations: [COMPONENTS, ProductDetailIngredientsComponent],
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
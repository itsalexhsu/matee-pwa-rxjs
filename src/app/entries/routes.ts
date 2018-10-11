import { Routes } from '@angular/router';

import { ProductsComponent } from './containers/products/products.component';
import { ProductComponent } from './containers/product/product.component';
import { IngredientListComponent } from './containers/ingredient-list/ingredient-list.component';
import { NewsComponent } from './containers/news/news.component';

export const routes: Routes = [
    { path: '', component: NewsComponent },
    { path: 'ingredient-list', component: IngredientListComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'product/:id', component: ProductComponent },
  ];
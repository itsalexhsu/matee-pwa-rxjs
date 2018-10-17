import { Routes } from '@angular/router';

import { ProductsComponent } from './containers/products/products.component';
import { ProductComponent } from './containers/product/product.component';
import { IngredientListComponent } from './containers/ingredient-list/ingredient-list.component';
import { GuidesComponent } from './containers/guides/guides.component';
import { GuideComponent } from './containers/guide/guide.component';

export const routes: Routes = [
    { path: '', component: GuidesComponent },
    { path: 'ingredient-list', component: IngredientListComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'guide/:id', component: GuideComponent },
  ];
import { Routes } from '@angular/router';

import { BlendsComponent } from './containers/blends/blends.component';
import { IngredientListComponent } from './containers/ingredient-list/ingredient-list.component';
import { ResourcesComponent } from './containers/resources/resources.component';
import { ViewResourceComponent } from './containers/view-resource/view-resource.component';

export const routes: Routes = [
    { path: '', component: ResourcesComponent },
    { path: 'ingredient-list', component: IngredientListComponent },
    { path: 'products', component: BlendsComponent },
    { path: 'product/:id', component: ViewResourceComponent },
  ];
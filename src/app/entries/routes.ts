import { Routes } from '@angular/router';

import { BlendsComponent } from './containers/blends/blends.component';
import { IngredientListComponent } from './containers/ingredient-list/ingredient-list.component';
import { ResourcesComponent } from './containers/resources/resources.component';
import { ViewResourceComponent } from './containers/view-resource/view-resource.component';
import { AddResourceComponent } from './containers/add-resource/add-resource.component';
import { EditResourcePhotoComponent } from './containers/edit-resource-photo/edit-resource-photo.component';
import { CartComponent } from './containers/cart/cart.component';

export const routes: Routes = [
    { path: '', component: ResourcesComponent },
    { path: 'ingredient-list', component: IngredientListComponent },
    { path: 'blends', component: BlendsComponent },
    { path: 'edit-photo', component: EditResourcePhotoComponent },
    { path: 'add-image', component: AddResourceComponent },
    { path: 'cart', component: CartComponent },
    { path: ':id', component: ViewResourceComponent }
  ];
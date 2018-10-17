import { Routes } from '@angular/router';
import { GuidesComponent } from './products/containers/guides/guides.component';
import { CartComponent } from './core/containers/cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule',
  },
  { path: '**', component: GuidesComponent },
];

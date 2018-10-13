import { Routes } from '@angular/router';
import { NewsComponent } from './products/containers/news/news.component';
import { CartComponent } from './core/containers/cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule',
  },
  { path: '**', component: NewsComponent },
];

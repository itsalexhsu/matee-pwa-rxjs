import { Routes } from '@angular/router';
import { NewsComponent } from './entries/containers/news/news.component';
import { CartComponent } from './core/containers/cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: '/entries', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  {
    path: 'entries',
    loadChildren: './entries/entries.module#EntriesModule',
  },
  { path: '**', component: NewsComponent },
];

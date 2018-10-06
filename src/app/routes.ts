import { Routes } from '@angular/router';
import { ResourcesComponent } from './entries/containers/resources/resources.component';

export const routes: Routes = [
  { path: '', redirectTo: '/entries', pathMatch: 'full' },
  {
    path: 'entries',
    loadChildren: './entries/entries.module#EntriesModule',
  },
  { path: '**', component: ResourcesComponent },
];

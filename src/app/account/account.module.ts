import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule }   from '@angular/forms';

import { MaterialModule } from '../material';

import { StoreModule } from '@ngrx/store';

// Components
import { AccountFormComponent } from './components/account-form/account-form.component';

// Containers
import { AccountsComponent } from './containers/accounts/accounts.component';

// Service
import { AuthGuard } from '../auth/services/auth-guard';

// import { reducers } from './reducers';

const COMPONENTS = [
  AccountsComponent,
  AccountFormComponent,
]

export const routes: Routes = [
  { path: 'account', component: AccountsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([]),
    RouterModule.forChild(routes),
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class AccountModule {
  static forRoot() {
    return {
      ngModule: AccountModule,
      providers: [AuthGuard]
    };
  }
}
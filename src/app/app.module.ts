// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ServiceWorkerModule } from '@angular/service-worker';

// RxJS modules
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { routes } from './routes';
import { reducers, metaReducers } from './reducers';

// Modules
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { EntriesModule } from './entries/entries.module';
import { AccountModule } from './account/account.module';
import { SharedModule } from './shared/shared.module';

// Services
import { CustomRouterStateSerializer } from './shared/utils';

//Components
import { AppComponent } from './core/containers/app/app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AccountModule.forRoot(),
    AuthModule.forRoot(),
    CoreModule.forRoot(),
    EntriesModule.forRoot(),
    SharedModule.forRoot(),
    DeviceDetectorModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),

    /**
      * @ngrx/router-store keeps router state up-to-date in the store.
      */
     StoreRouterConnectingModule.forRoot({
       /*
         They stateKey defines the name of the state used by the router-store reducer.
         This matches the key defined in the map of reducers
       */
       stateKey: 'router',
     }),

     /**
       * Store devtools instrument the store retaining past versions of state
       * and recalculating new states. This enables powerful time-travel
       * debugging.
       *
       * To use the debugger, install the Redux Devtools extension for either
       * Chrome or Firefox
       *
       * See: https://github.com/zalmoxisus/redux-devtools-extension
       */
      StoreDevtoolsModule.instrument({
        name: 'NgRx Matee DevTools',
        logOnly: environment.production,
      }),

      /**
       * EffectsModule.forRoot() is imported once in the root module and
       * sets up the effects class to be initialized immediately when the
       * application starts.
       *
       * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
       */
      EffectsModule.forRoot([])
  ],
  providers: [
    /**
     * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
     * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
     * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
     */
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
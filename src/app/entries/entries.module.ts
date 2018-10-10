import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//Effects
import { BlendsEffects } from "./effects/blends";

//Containers
import { ResourcesComponent } from './containers/resources/resources.component';
import { ViewResourceComponent } from './containers/view-resource/view-resource.component';
import { ResourceDetailComponent } from './containers/resource-detail/resource-detail.component';
import { BlendsComponent } from './containers/blends/blends.component';
import { IngredientListComponent } from './containers/ingredient-list/ingredient-list.component';
import { FeaturedBlendsComponent } from './containers/featured-blends/featured-blends.component';

//Components
import { PreviousBlendsComponent } from './components/previous-blends/previous-blends.component';
import { CreateBlendsComponent } from './components/create-blends/create-blends.component';
import { FavoriteBlendsComponent } from './components/favorite-blends/favorite-blends.component';
import { BlendSummaryComponent } from './components/blend-summary/blend-summary.component';
import { SelectSizeCardComponent } from './components/select-size-card/select-size-card.component';
import { BlendDetailComponent } from './components/blend-detail/blend-detail.component';

import { ArchiveConfirmationComponent } from './dialog/archive-confirmation/archive-confirmation.component';

import { MaterialModule } from '../material';

import { reducers } from './reducers';
import { routes } from './routes';

import { PipesModule } from '../shared/pipes';
import { OrientationPipe } from "../shared/pipes/resetOrientation";
import { ToBase64Pipe } from '../shared/pipes/fileToBase64';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  ArchiveConfirmationComponent,
  ResourcesComponent,
  ViewResourceComponent,
  ResourceDetailComponent,
  BlendsComponent,
  IngredientListComponent,
  FeaturedBlendsComponent,
  PreviousBlendsComponent,
  CreateBlendsComponent,
  FavoriteBlendsComponent,
  BlendSummaryComponent,
  SelectSizeCardComponent,
  BlendDetailComponent,
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    PipesModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('entries', reducers),
    EffectsModule.forFeature([BlendsEffects]),
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  entryComponents: [ArchiveConfirmationComponent],
})
export class EntriesModule {
  static forRoot() {
    return {
      ngModule: EntriesModule,
      providers: [OrientationPipe, ToBase64Pipe]
    };
  }
}
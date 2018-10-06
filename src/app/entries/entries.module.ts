import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//Effects
import { EntryEffects } from './effects/entry';
import { ResourceEffects } from './effects/resource';
import { LocationEffects } from "./effects/location";
import { BlendsEffects } from "./effects/blends";

//Containers
import { ResourcesComponent } from './containers/resources/resources.component';
import { ViewResourceComponent } from './containers/view-resource/view-resource.component';
import { AddResourceComponent } from './containers/add-resource/add-resource.component';
import { EditResourcePhotoComponent } from './containers/edit-resource-photo/edit-resource-photo.component';
import { ResourceDetailComponent } from './containers/resource-detail/resource-detail.component';
import { BlendsComponent } from './containers/blends/blends.component';
import { IngredientListComponent } from './containers/ingredient-list/ingredient-list.component';
import { CartComponent } from './containers/cart/cart.component';

//Components
import { AddLocationComponent } from './components/add-location/add-location.component';
import { ImageFrameComponent } from './components/image-frame/image-frame.component';
import { EditImageFormComponent } from './components/edit-image-form/edit-image-form.component';
import { ResourcePreviewComponent } from './components/resource-preview/resource-preview.component';
import { FeaturedBlendsComponent } from './components/featured-blends/featured-blends.component';
import { PreviousBlendsComponent } from './components/previous-blends/previous-blends.component';
import { CreateBlendsComponent } from './components/create-blends/create-blends.component';
import { FavoriteBlendsComponent } from './components/favorite-blends/favorite-blends.component';

import { ArchiveConfirmationComponent } from './dialog/archive-confirmation/archive-confirmation.component';

import { MaterialModule } from '../material';

import { reducers } from './reducers';
import { routes } from './routes';

import { PipesModule } from '../shared/pipes';
import { OrientationPipe } from "../shared/pipes/resetOrientation";
import { ToBase64Pipe } from '../shared/pipes/fileToBase64';

const COMPONENTS = [
  ArchiveConfirmationComponent,
  AddLocationComponent,
  ImageFrameComponent,
  EditImageFormComponent,
  ResourcesComponent,
  ViewResourceComponent,
  ResourceDetailComponent,
  ResourcePreviewComponent,
  AddResourceComponent,
  EditResourcePhotoComponent,
  BlendsComponent,
  IngredientListComponent,
  CartComponent,
  FeaturedBlendsComponent,
  PreviousBlendsComponent,
  CreateBlendsComponent,
  FavoriteBlendsComponent,
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    PipesModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('entries', reducers),
    EffectsModule.forFeature([EntryEffects, ResourceEffects, LocationEffects, BlendsEffects]),
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
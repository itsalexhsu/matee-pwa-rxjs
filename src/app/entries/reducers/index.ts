import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromEntries from './entries';
import * as fromResources from './resource';
import * as fromResourcesPage from './resources-page';
import * as fromLocations from './location';
import * as fromArchives from './archive';
import * as fromBlends from './blends';

import { Resource } from "../models/resource.model";

export interface EntriesState {
  entries: fromEntries.State;
  resources: fromResources.State;
  locations: fromLocations.State;
  resourcesPage: fromResourcesPage.State;
  archives: fromArchives.State;
  blends: fromBlends.State;
}

export interface State extends fromRoot.State {
  entries: EntriesState;
}

export const reducers: ActionReducerMap<EntriesState> = {
  entries: fromEntries.reducer,
  resources: fromResources.reducer,
  locations: fromLocations.reducer,
  resourcesPage: fromResourcesPage.reducer,
  archives: fromArchives.reducer,
  blends: fromBlends.reducer,
};

export const getEntriesEntityState = createFeatureSelector<EntriesState>('entries');

// Entries Reducers
export const selectEntriesEntriesState = createSelector(
  getEntriesEntityState,
  (state: EntriesState) => state.entries
);
export const getEntriesLoaded = createSelector(
  selectEntriesEntriesState,
  fromEntries.getLoaded
);
export const getEntriesLoading = createSelector(
  selectEntriesEntriesState,
  fromEntries.getLoading
);
export const getEntries = createSelector(
  selectEntriesEntriesState,
  fromEntries.getResult
);

// Resource Reducers
export const selectEntriesResourcesState = createSelector(
  getEntriesEntityState,
  (state: EntriesState) => state.resources
);
export const getResourceLoaded = createSelector(
  selectEntriesResourcesState,
  fromResources.getLoaded
);
export const getResourceLoading = createSelector(
  selectEntriesResourcesState,
  fromResources.getLoading
);
export const getResourceCreating = createSelector(
  selectEntriesResourcesState,
  fromResources.getCreating
);
export const getResource = createSelector(
  selectEntriesResourcesState,
  fromResources.getResult
);

// Locations Reducers
export const selectEntriesLocationsState = createSelector(
  getEntriesEntityState,
  (state: EntriesState) => state.locations
);
export const getLocationsResult = createSelector(
  selectEntriesLocationsState,
  fromLocations.getResult
);
export const getLocationsSearched = createSelector(
  selectEntriesLocationsState,
  fromLocations.getSearched
);
export const getLocationsSearching = createSelector(
  selectEntriesLocationsState,
  fromLocations.getSearching
);
export const getUserCoord = createSelector(
  selectEntriesLocationsState,
  fromLocations.getUserCoord
);

// Resources Page Reducers
export const selectEntriesResourcesPageState = createSelector(
  getEntriesEntityState,
  (state: EntriesState) => state.resourcesPage
);
export const getAllResources = createSelector(
  selectEntriesResourcesPageState,
  fromResourcesPage.getResult
);
export const getAllResourcesLoaded = createSelector(
  selectEntriesResourcesPageState,
  fromResourcesPage.getLoaded
);
export const getAllResourcesLoading = createSelector(
  selectEntriesResourcesPageState,
  fromResourcesPage.getLoading
);
export const getAllSavedResources = createSelector(
  getAllResources,
  (resources: Resource[]) => {
    return resources.filter(resource => resource.status === 'saved')
  }
);

// Archive Reducers
export const selectEntriesArchivePageState = createSelector(
  getEntriesEntityState,
  (state: EntriesState) => state.archives
);
export const getArchived = createSelector(
  selectEntriesArchivePageState,
  fromArchives.getArchived
);

// Blends Reducers
export const blendsPageState = createSelector(
  getEntriesEntityState,
  (state: EntriesState) => state.blends
);
export const getBlendResult = createSelector(
  blendsPageState,
  fromBlends.getBlendsResult
);
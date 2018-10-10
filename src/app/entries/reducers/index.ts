import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromFeaturedProds from './featured-products';
import * as fromProductDetail from './product-details';

export interface EntriesState {
  productDetail: fromProductDetail.State;
  featuredProducts: fromFeaturedProds.State;
}

export interface State extends fromRoot.State {
  entries: EntriesState;
}

export const reducers: ActionReducerMap<EntriesState> = {
  productDetail: fromProductDetail.reducer,
  featuredProducts: fromFeaturedProds.reducer,
};

// Blends Reducers

export const getEntriesEntityState = createFeatureSelector<EntriesState>('entries');

export const blendsPageState = createSelector(
  getEntriesEntityState,
  (state: EntriesState) => state.featuredProducts
);

export const getBlendsResult = createSelector(
  blendsPageState,
  fromFeaturedProds.getProductsResult
);

export const blendPageState = createSelector(
  getEntriesEntityState,
  (state: EntriesState) => state.productDetail
);

export const getBlendResult = createSelector(
  blendPageState,
  fromProductDetail.getProductResult
);
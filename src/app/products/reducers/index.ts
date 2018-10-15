import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromFeaturedProds from './featured-products';
import * as fromProductDetail from './product-details';
import * as fromLambdaProductDetail from './lambda-product-details';

export interface ProductsState {
  productDetail: fromProductDetail.State;
  featuredProducts: fromFeaturedProds.State;
  lambdaProductDetail: fromLambdaProductDetail.State;
}

export interface State extends fromRoot.State {
  products: ProductsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  productDetail: fromProductDetail.reducer,
  featuredProducts: fromFeaturedProds.reducer,
  lambdaProductDetail: fromLambdaProductDetail.reducer,
};

// Blends Reducers

export const getProductsEntityState = createFeatureSelector<ProductsState>('products');

export const ProductsPageState = createSelector(
  getProductsEntityState,
  (state: ProductsState) => state.featuredProducts
);

export const getProductsResult = createSelector(
  ProductsPageState,
  fromFeaturedProds.getProductsResult
);

export const ProductPageState = createSelector(
  getProductsEntityState,
  (state: ProductsState) => state.productDetail
);

export const getProductResult = createSelector(
  ProductPageState,
  fromProductDetail.getProductResult
);

export const getSelectedVariant = createSelector(
  ProductPageState,
  fromProductDetail.getSelectedVariant
);

export const LambdaProductPageState = createSelector(
  getProductsEntityState,
  (state: ProductsState) => state.lambdaProductDetail
);

export const getLambdaProductResult = createSelector(
  LambdaProductPageState,
  fromLambdaProductDetail.getLambdaProductResult
);
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchProducts } from './productsAPI';
import { fetchPricesAsync } from '../prices/pricesSlice';

export interface Product {
  regex: string;
  text: string;
}

export interface ProductsState {
  productList: Array<Product>;
  selectedProduct: any;
}

const initialState: ProductsState = {
  productList: [],
  selectedProduct: null,
};

export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const viewProductAsync = (product: Product) => async (dispatch: Function) => {
  dispatch(fetchPricesAsync(product.regex));
  dispatch(selectProduct(product));
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    selectProduct: (state, action: PayloadAction<any>) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.fulfilled, (state, { payload }) => {
      state.productList = payload;
    })
    builder.addCase(fetchProductsAsync.rejected, (state) => {
      state.productList = [];
    })
  },
});

export const { selectProduct } = productsSlice.actions;
export const selectedProductSelector = (state: RootState) => state.products.selectedProduct;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const productListSelector = (state: RootState) => state.products.productList;

export default productsSlice.reducer;

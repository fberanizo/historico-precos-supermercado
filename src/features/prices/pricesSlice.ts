import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchPrices } from './pricesAPI';

export interface PricesState {
  priceList: {x: Array<string>, y: Array<number>, text: Array<string>, venues: Array<string>, uniqueVenues: Array<string>};
}

const initialState: PricesState = {
  priceList: {x: [], y: [], text: [], venues: [], uniqueVenues: []},
};

export const fetchPricesAsync = createAsyncThunk(
  'prices/fetchPrices',
  async (regex: string) => {
    const response = await fetchPrices(regex);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPricesAsync.fulfilled, (state, { payload }) => {
      state.priceList = payload;
    })
    builder.addCase(fetchPricesAsync.rejected, (state) => {
      state.priceList = {x: [], y: [], text: [], venues: [], uniqueVenues: []};
    })
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const priceListSelector = (state: RootState) => state.prices.priceList;

export default pricesSlice.reducer;

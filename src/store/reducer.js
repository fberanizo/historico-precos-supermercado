import { getProducts } from '../services/products';

import actionTypes from './actionTypes';

const initialState = {
  productList: getProducts(),
  selectedProduct: null,
  priceList: {x: [], y: [], text: []},
};

const reducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case actionTypes.PRODUCT_SELECTED:
      return {
        ...state,
        selectedProduct: action.payload.product,
        priceList: action.payload.priceList,
      }
    default:
      return state;
  }
};

// EXPORT
export default reducer;

import { getPrices } from '../services/prices';
import actionTypes from './actionTypes';

export const selectProduct = (product) => {
  const priceList = getPrices(product.regex);
  return {
    type: actionTypes.PRODUCT_SELECTED,
    payload: {
      product: product,
      priceList: priceList,
    },
  };
};

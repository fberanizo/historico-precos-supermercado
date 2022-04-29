import productsReducer from './productsSlice';

describe('products reducer', () => {
  it('should handle initial state', () => {
    expect(productsReducer(undefined, { type: 'unknown' })).toEqual({
      productList: [],
      selectedProduct: null,
    });
  });
});

import pricesReducer from './pricesSlice';

describe('prices reducer', () => {
  it('should handle initial state', () => {
    expect(pricesReducer(undefined, { type: 'unknown' })).toEqual({
      priceList: {x: [], y: [], text: []},
    });
  });
});

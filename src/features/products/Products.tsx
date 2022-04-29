import React, { useState, useEffect } from 'react';

import { Drawer, List, Typography } from 'antd';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectedProductSelector,
  productListSelector,
  fetchProductsAsync,
  viewProductAsync,
  Product,
} from './productsSlice';

import OpenDrawerButton from './OpenDrawerButton';

function Products() {
  const productList = useAppSelector(productListSelector);
  const selectedProduct = useAppSelector(selectedProductSelector);
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch])

  return (<>
    <OpenDrawerButton visible={!visible} onClick={() => setVisible(!visible)} />
    <Drawer
      title='Produtos'
      placement='right'
      closable={true}
      onClose={() => setVisible(!visible)}
      visible={visible}
      mask={false}
    >
      <List
        size='small'
        dataSource={productList}
        renderItem={(item: Product) => (
          <List.Item
            className={selectedProduct === item ? 'product selected' : 'product'}
            onClick={() => dispatch(viewProductAsync(item))}>
            <Typography.Text>{item.text}</Typography.Text>
          </List.Item>
        )}
      />
    </Drawer>
  </>
  );
}

export default Products;

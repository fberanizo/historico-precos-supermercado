import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Drawer, List, Typography } from 'antd';

import { selectProduct } from '../store/actions';

import OpenDrawerButton from './OpenDrawerButton';

const productListSelector = (reducer) => {
  return reducer.productList;
};

const selectedProductSelector = (reducer) => {
  return reducer.selectedProduct;
};

const AppDrawer = () => {
  const productList = useSelector(productListSelector);
  const selectedProduct = useSelector(selectedProductSelector);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(selectProduct(item));
  };

  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(!visible);
  };

  return (
    <>
      <OpenDrawerButton visible={!visible} onClick={handleClose} />
      <Drawer
        title='Produtos'
        placement='right'
        closable={true}
        onClose={handleClose}
        visible={visible}
        mask={false}
      >
        <List
          size='small'
          dataSource={productList}
          renderItem={item => (
            <List.Item
              className={selectedProduct === item ? 'product selected' : 'product'}
              onClick={() => handleClick(item)}>
              <Typography.Text>{item.text}</Typography.Text>
            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
};

export default AppDrawer;

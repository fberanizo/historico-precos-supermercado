import { useDispatch, useSelector } from 'react-redux';

import { Drawer, List, Typography } from 'antd';

import { selectProduct } from '../store/actions';

const productListSelector = (reducer) => {
  return reducer.productList;
};

const AppDrawer = () => {
  const productList = useSelector(productListSelector);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(selectProduct(item))
  };

  return (
    <Drawer
      title='Produtos'
      placement='right'
      closable={true}
      visible={true}
      mask={false}
    >
      <List
        size='small'
        dataSource={productList}
        renderItem={item => (
          <List.Item
            className='product'
            onClick={() => handleClick(item)}>
            <Typography.Text>{item.text}</Typography.Text>
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default AppDrawer;

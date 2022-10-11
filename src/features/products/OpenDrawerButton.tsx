import React from 'react';

import { Affix, Button } from 'antd';

import './OpenDrawerButton.css';

function OpenDrawerButton(props: {visible: boolean, onClick: () => void}) {
  const { visible } = props;
  const { onClick } = props;

  return visible ? (
    <Affix style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1 }}>
      <Button
        type='primary'
        shape='round'
        size='large'
        onClick={onClick}
        className='ant-btn-floating'
        style={{zIndex: 1000}}>
        SELEÇÃO DE PRODUTO
      </Button>
    </Affix>
  ) : (
    <></>
  );
}

export default OpenDrawerButton;

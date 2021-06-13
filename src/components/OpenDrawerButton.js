import { Affix, Button } from 'antd';

import './OpenDrawerButton.css';

const OpenDrawerButton = (props) => {
  const { visible } = props;
  const { onClick } = props;

  return visible ? (
    <Affix style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
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
};

export default OpenDrawerButton;

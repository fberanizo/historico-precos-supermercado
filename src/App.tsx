import React, { useState } from 'react';
import { Layout } from 'antd';
import Products from './features/products/Products';
import Prices from './features/prices/Prices';
import './App.css';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <Layout style={{height:"100vh"}}>
      <Products visible={visible} setVisible={setVisible} />
      <Prices visible={visible} />
    </Layout>
  );
}

export default App;

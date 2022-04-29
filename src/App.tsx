import React from 'react';
import { Layout } from 'antd';
import Products from './features/products/Products';
import Prices from './features/prices/Prices';
import './App.css';

function App() {
  return (
    <Layout>
      <Products />
      <Prices />
    </Layout>
  );
}

export default App;

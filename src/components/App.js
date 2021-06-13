import { Layout } from 'antd';

import './App.css';

import AppDrawer from './AppDrawer';
import Content from './Content';

const App = () => {
  return (
    <Layout>
      <AppDrawer />
      <Content />
    </Layout>
  );
}

export default App;

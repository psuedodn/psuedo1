import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';

function App() {
  // const showCart = useSelector((state: any) => state.ui.query);
  // console.log(showCart);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

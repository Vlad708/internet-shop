import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Products from '../../components/products/Products';
import Card from '../../components/card/Card';
import OrderTable from '../../components/orderTable/OrderTable';
import NotFound from '../../components/notfound/NotFound';

class Main extends Component {

  render() {

    return (
      <div id="main-fluid" className="pure-u-3-4">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/categories/:name" render={({match}) => <Products categoryName={match.params.name} />} />
          <Route path="/product/:id" render={({match}) => <Card productId={match.params.id} />} />
          <Route exact path="/my-order" component={OrderTable} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Main;

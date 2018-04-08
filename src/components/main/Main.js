import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Products from '../../components/products/Products';

class Main extends Component {

  render() {

    return (
      <div className="main-fluid pure-u-3-4">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/categories/:id" render={({match}) => <Products categoryId={match.params.id} />} />
        </Switch>
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Products from '../../components/products/Products';

class Main extends Component {

  render() {

    return (
      <div className="main-fluid pure-u-3-4">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/categories/:name" render={({match}) => <Products categoryName={match.params.name} />} />
        </Switch>
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import Products from '../../components/products/Products';

class Main extends Component {

  render() {

    return (
      <div className="main-fluid pure-u-3-4">
      	<Products />      	
      </div>
    );
  }
}

export default Main;
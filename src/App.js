import React, { Component } from 'react';

import Categories from './components/Categories';
import Products from './components/products/Products';

class App extends Component {

  render() {

    return (
      <div className="App pure-g">
      	<Categories />
      	<Products />      	
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Categories from './components/Categories'

@inject('phonesStore')
@observer 
class App extends Component {

  render() {

  	const {phonesStore} = this.props;

    return (
      <div className="App">
      	<Categories />      	
      </div>
    );
  }
}

export default App;

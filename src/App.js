import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Categories from './components/Categories'
import AppBar from 'material-ui/AppBar';

@inject('phonesStore')
@observer 
class App extends Component {

  render() {

    return (
      <div className="App pure-g">      	
      	<Categories />      	
      </div>
    );
  }
}

export default App;

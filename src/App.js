import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Categories from './components/Categories'
import AppBar from 'material-ui/AppBar';

@inject('phonesStore')
@observer 
class App extends Component {

  render() {

  	const {phonesStore} = this.props;

    return (
      <div className="App">
      	<AppBar title="My AppBar" />
      	<Categories />    	
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('stores')
@observer 
class App extends Component {

  render() {

  	const {stores} = this.props;

    return (
      <div className="App">
      	<p>There are {stores.phonesCount} phones</p>
      </div>
    );
  }
}

export default App;

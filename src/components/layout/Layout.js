import React, { Component } from 'react';
import './layout.css';

import Sidebar from '../../components/sidebar/Sidebar';
import Main from '../../components/main/Main';

class Layout extends Component {

  render() {

    return (
      <div className="Layout pure-g">
      	<Sidebar />
      	<Main />     	
      </div>
    );
  }
}

export default Layout;
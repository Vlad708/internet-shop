import React, { Component } from 'react';
import './layout.css';

import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Main from '../../components/main/Main';

class Layout extends Component {
  render() {
    return (
      <div className="Layout pure-g">
        <Header />
      	<Sidebar />
      	<Main />
      </div>
    );
  }
}

export default Layout;

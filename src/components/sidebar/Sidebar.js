import React, { Component } from 'react';
import Categories from '../../components/categories/Categories';

class Sidebar extends Component {

  render() {

    return (
      <div className="sidebar-fluid pure-u-1-4">
      	<div className="sidebar-content">
      		<Categories />
      	</div>      	
      </div>
    );
  }
}

export default Sidebar;
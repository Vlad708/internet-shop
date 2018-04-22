import React, { Component } from 'react';
import Trash from '../../components/trash/Trash';
import './header.css';

class Header extends Component {
    render() {
      return (
        <div id="header-fluid" className="pure-u-1-1">
          <div className="header-content pure-g">
            <div className="logo-wrapper pure-u-1-2">
                <h1>Mobile shop</h1>
            </div>
            <div className="trash-wrapper pure-u-1-2">
              <Trash />
            </div>
          </div>
        </div>
      )
    }
}

export default Header;

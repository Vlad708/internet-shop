import React, { Component } from 'react';
import './trash.css';

class Trash extends Component {
  render() {
    return (
      <div>
        <a className="pure-button trash-button">
          <i className="fa fa-shopping-cart"></i>
          <span className="total-price">5000</span>
          <span className="total-count">2</span>
        </a>
      </div>
    )
  }
}

export default Trash;

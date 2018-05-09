import React, { Component } from 'react';
import { inject, observer} from 'mobx-react';
import { Link } from 'react-router-dom'

import './cart.css';

@inject('phonesStore')
@observer
class Cart extends Component {
  render() {
    const { getTotalPrice, getTotalCount } = this.props.phonesStore;
    return (
      <div>
        <Link to={`/my-order`} >
          <a className="pure-button trash-button">
            <i className="fa fa-shopping-cart"></i>
            <span className="total-price">{getTotalPrice} $</span>
            <span className="total-count">{getTotalCount}</span>
          </a>
        </Link>
      </div>
    )
  }
}

export default Cart;

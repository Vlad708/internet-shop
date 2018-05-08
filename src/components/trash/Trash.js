import React, { Component } from 'react';
import { inject, observer} from 'mobx-react';
import './trash.css';

@inject('phonesStore')
@observer
class Trash extends Component {
  render() {
    const { getTotalPrice } = this.props.phonesStore;
    return (
      <div>
        <a className="pure-button trash-button">
          <i className="fa fa-shopping-cart"></i>
          <span className="total-price">{getTotalPrice}</span>
          <span className="total-count">0</span>
        </a>
      </div>
    )
  }
}

export default Trash;

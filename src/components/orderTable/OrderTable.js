import React, { Component } from 'react';
import { inject, observer} from 'mobx-react';

@inject('phonesStore')
@observer
class OrderTable extends Component {

  render() {
    const { myTrash } = this.props.phonesStore;    
    return (
      <div>
        <h1>Моя корзина</h1>
      </div>
    )
  }

}

export default OrderTable;

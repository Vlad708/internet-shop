import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Product from './Product';

@inject('phonesStore')
@observer
class Products extends Component {

	render() {

		const {phonesStore} = this.props;
		const items = phonesStore.map((item) => {			
			return <Product productItem={item} />
		});

		return (
			<div className="pure-u-3-4">
				{items}		
			</div>
		);
	}
}

export default Products;
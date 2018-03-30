import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Product from './Product';

@inject('phonesStore')
@observer

/*const test = () => {
		return <p>Test message</p>
	}*/

class Products extends Component {
	
	constructor(props) {
		super(props);			
		this.filterData = this.filterData.bind(this);
	}

	filterData(data, categoryId) {	
		categoryId = categoryId || '';

		data =  data.filter((element) => {			
			return (categoryId) ? element.categoryId === categoryId : element;			
		});

		return <Product productItems={data} />;	
	}

	render() {
		const { phonesStore } = this.props;
		
		return (
			<div className="products-fluid">
				<div className="products">
					{this.filterData(phonesStore)}
				</div>
			</div>
		);
	}
}

export default Products;
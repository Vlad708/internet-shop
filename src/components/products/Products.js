import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Product from './Product';

@inject('phonesStore')
@observer
class Products extends Component {

	constructor(props) {
		super(props);
		this.filterData = this.filterData.bind(this);
	}

	filterData(data, categoryId) {
		categoryId = parseInt(categoryId || 0, 10)

		data =  data.filter((element) => {
			return (categoryId !== 0) ? element.categoryId === categoryId : element;
		});		

		return <Product productItems={data} />;
	}

	render() {
		const { phonesStore } = this.props;

		return (
			<div className="products-fluid">
				<div className="products">
					{this.filterData(phonesStore, this.props.categoryId)}
				</div>
			</div>
		);
	}
}

export default Products;

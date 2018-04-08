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

	filterData(data, categoryName) {
		categoryName = categoryName || 'All';

		data =  data.filter((element) => {
			console.log(element);
			return (categoryName != 'All') ? element.categoryName === categoryName : element;
		});

		console.log(data);

		return <Product productItems={data} />;
	}

	render() {
		const { phonesStore } = this.props;

		return (
			<div className="products-fluid">
				<div className="products">
					{this.filterData(phonesStore, this.props.categoryName)}
				</div>
			</div>
		);
	}
}

export default Products;

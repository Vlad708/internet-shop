import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Product from '../../components/product/Product';
import NotFound from '../../components/notfound/NotFound';

@inject('phonesStore')
@observer
class Products extends Component {

	constructor(props) {
		super(props);
		this.filterData = this.filterData.bind(this);
	}

	filterData = (data, categoryName) => {
		categoryName = categoryName || 'All';

		data =  data.filter((element) => {
			return (categoryName != 'All') ? element.categoryName === categoryName : element;
		});

		if (data.length === 0) {
			return <NotFound />
		}

		return <Product productItems={data} />;
	}

	render() {
		const { phonesStore, categoryName } = this.props;

		return (
			<div className="products-fluid">
				<div className="products">
					<h1 id="category-name">{categoryName}</h1>
					{this.filterData(phonesStore.phones, categoryName)}
				</div>
			</div>
		);
	}
}

export default Products;

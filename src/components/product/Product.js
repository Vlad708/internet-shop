import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom'

import Image from '../../components/image/Image';
import { toCamelCase } from '../../helpers/helpers';
import './product.css';

@inject('phonesStore')
@observer
class Product extends Component {

	handleClickItem = (id) =>  {
		this.props.phonesStore.addToTrash(id);
	}

	render() {
		const { productItems } = this.props;

		return productItems.map(({id, name, categoryName, os, battery, camera, size}) => {
			let imgUrl = process.env.PUBLIC_URL + '/images/phones/' + toCamelCase(name) + '.png';

			return (
      	<div className="product-item pure-u-1-4">
					<Image source={imgUrl} className="product-item__image" />
					<Link to={`/product/${id}`} className="product-item__title">{name}</Link>
					<p className="product-item__details">[{os} {battery} {camera} {size}]</p>
					<button className="pure-button product-item__buy" onClick={() => this.handleClickItem(id)}>
				    <i className="fa fa-shopping-cart"></i>
						Купить
					</button>
				</div>
			)
		});
	}
}

export default Product;

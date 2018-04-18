import React, { Component } from 'react';
import { toCamelCase } from '../../helpers/helpers';
import './product.css';

class Product extends Component {

	render() {
		const { productItems } = this.props;

		return productItems.map(({name, os, battery, camera, size}) => {
			let imgUrl = process.env.PUBLIC_URL + '/images/phones/' + toCamelCase(name) + '.png';

			return (
      	<div className="product-item pure-u-1-4">
					<img src={imgUrl} className="product-item__image" />
					<a href="#" className="product-item__title">{name}</a>
					<p className="product-item__details">[{os} {battery} {camera} {size}]</p>
					<a class="pure-button product-item__buy" href="#">
				    <i class="fa fa-shopping-cart"></i>
						Купить
					</a>
				</div>
			)
		});
	}
}

export default Product;

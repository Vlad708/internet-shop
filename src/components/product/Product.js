import React, { Component } from 'react';
import { toCamelCase } from '../../helpers/helpers';
import './product.css';

class Product extends Component {

	render() {
		const { productItems } = this.props;

		return productItems.map(({name, os, battery, camera, size}) => {
			let imgUrl = toCamelCase(name) + '.png';
			console.log(imgUrl, '===image-url');
			return (
      	<div className="product-item pure-u-1-4">
					<img src={import(`${imgUrl}`)} />
					<h4 href="#" className="product-item__title">{name}</h4>
					<p className="product-item__details">[{os} {battery} {camera} {size}]</p>
				</div>
			)
		});
	}
}

export default Product;

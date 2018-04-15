import React, { Component } from 'react';
import './product.css';

class Product extends Component {

	render() {
		const { productItems } = this.props;

		return productItems.map(({name, os, battery, camera, size}) => {
			return (
      	<div className="product-item pure-u-1">
					<h2 href="#" className="product-item__title">{name}</h2>
					<p className="product-item__os">Операционная система: {os}</p>
					<p className="product-item__battery">Емкость батареи: {battery}</p>
					<p className="product-item__camera">Встроенная камера: {camera}</p>
					<p className="product-item__size">Размер: {size}</p>
				</div>
			)
		});
	}
}

export default Product;

import React, { Component } from 'react';
import './product.css';

class Product extends Component {

	render() {

		const { productItem } = this.props;

		return (
			<div className="product-item pure-u-1">				
				<h2 href="#" className="product-item__title">{productItem.name}</h2>
				<p className="product-item__os">Операционная система: {productItem.os}</p>
				<p className="product-item__battery">Емкость батареи: {productItem.battery}</p>
				<p className="product-item__camera">Встроенная камера: {productItem.camera}</p>
				<p className="product-item__size">Размер: {productItem.size}</p>
			</div>
		);
	}
}

export default Product;
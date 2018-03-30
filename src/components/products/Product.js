import React, { Component } from 'react';
import './product.css';

class Product extends Component {

	render() {
		const { productItems } = this.props;

		return productItems.map((item) => {
			return (
		      	<div className="product-item pure-u-1">				
					<h2 href="#" className="product-item__title">{item.name}</h2>
					<p className="product-item__os">Операционная система: {item.os}</p>
					<p className="product-item__battery">Емкость батареи: {item.battery}</p>
					<p className="product-item__camera">Встроенная камера: {item.camera}</p>
					<p className="product-item__size">Размер: {item.size}</p>
				</div>
			)
		});
	}
}

export default Product;
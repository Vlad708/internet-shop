import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, Route } from 'react-router-dom'

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Products from '../../components/products/Products';

@inject('categoriesStore')
@observer
class Categories extends Component {

	render() {
		const {categoriesStore} = this.props;
		const listItems = categoriesStore.categories.map(({id, name}) => {
			return (
				<div>
						<MenuItem
							linkButton
							containerElement={<Link to={`/categories/${id}`} />}
							primaryText={name}
							key={id}
						/>
				</div>)
		});

		return (
			<Fragment>
				<div className="categories-menu-wrapper">
					<Paper>
						<Menu>
							{listItems}
						</Menu>
					</Paper>
				</div>
			</Fragment>
		);
	}
}

export default Categories;

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

@inject('categoriesStore')
@observer 
class Categories extends Component {

	render() {

		const {categoriesStore} = this.props;
		const listItems = categoriesStore.categories.map((item) => {			
			return <MenuItem primaryText={item.name} key={item.id} />
		});

		return (
			<div className="categories-menu-wrapper">
				<Paper>
					<Menu>
						{listItems}
					</Menu>
				</Paper>
			</div>
		);
	}
}

export default Categories;
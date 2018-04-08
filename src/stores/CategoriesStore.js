import { observable } from 'mobx';

class CategoriesStore {
	@observable categories = [
					{id: 0, name: 'All'},
					{id: 1, name: 'Apple'},
					{id: 2, name: 'Samsung'},
					{id: 3, name: 'Htc'},
					{id: 4, name: 'Lenovo'},
					{id: 5, name: 'Microsoft'}
				];
}

const categories = new CategoriesStore();

export default categories;

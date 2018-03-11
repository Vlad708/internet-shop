import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'mobx-react';
import phonesStore from './stores/PhonesStore';
import categoriesStore from './stores/CategoriesStore';


import registerServiceWorker from './registerServiceWorker';

const Root = (
	<Provider phonesStore={phonesStore.all} categoriesStore={categoriesStore.categories}>
		<App />
	</Provider>
);


ReactDOM.render(Root, document.getElementById('root'));


registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import phonesStore from './stores/PhonesStore';
import categoriesStore from './stores/CategoriesStore';


import registerServiceWorker from './registerServiceWorker';

const Root = (
	<Provider phonesStore={phonesStore.all} categoriesStore={categoriesStore.categories}>
		<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>		
			<App />		
		</MuiThemeProvider>
	</Provider>
);


ReactDOM.render(Root, document.getElementById('root'));


registerServiceWorker();

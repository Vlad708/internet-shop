import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'mobx-react';
import stores from './stores/PhonesStore';


import registerServiceWorker from './registerServiceWorker';

const Root = (
	<Provider stores={stores}>
		<App />
	</Provider>
);


ReactDOM.render(Root, document.getElementById('root'));


registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from './store/store'
import './index.css';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>	
			<App />
		</BrowserRouter>
	</Provider>
	,
	document.getElementById('root'));

// serviceWorker.unregister();

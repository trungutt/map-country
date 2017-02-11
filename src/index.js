import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import mapReducers from './reducers/reducers';
import App from './App';


const store = createStore(mapReducers, applyMiddleware(createLogger({ collapsed: true })));

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

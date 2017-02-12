import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';

import reducers from './reducers';
import initialState from './store';
import App from './App';

/* eslint-disable no-underscore-dangle */
const store = createStore(
	reducers,
	initialState,
	applyMiddleware(reduxPromiseMiddleware(), createLogger({ collapsed: true })),
);

/* eslint-enable */
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

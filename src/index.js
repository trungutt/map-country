import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import reducers from './reducers/reducers';
import initialState from './store/initialState';
import App from './App';

/* eslint-disable no-underscore-dangle */
const store = createStore(
	combineReducers(reducers),
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(createLogger({ collapsed: true })),
);

/* eslint-enable */
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import reducers from './reducers/reducers';
import initialState from './store/initialState';
import App from './App';


const store = createStore(
	combineReducers(reducers),
	initialState,
	applyMiddleware(createLogger({ collapsed: true })),
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

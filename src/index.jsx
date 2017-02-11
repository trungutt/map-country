import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import mapReducers from './reducers/reducers';
import App from './components/App';
import actionTypes from './actions/actionTypes';


const store = createStore(mapReducers, applyMiddleware(createLogger({ collapsed: true })));

store.dispatch({ type: actionTypes.ADD_CITY, payload: 'Viroflay' });
store.dispatch({ type: actionTypes.ADD_CITY, payload: 'Malakoff' });
store.dispatch({ type: actionTypes.REMOVE_CITY, payload: 1 });

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

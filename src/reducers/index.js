/* @flow */

import { combineReducers } from 'redux';

import cities from './citiesReducer';
import search from './searchReducer';


export default combineReducers({
	cities,
	search,
});

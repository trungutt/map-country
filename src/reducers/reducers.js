import { combineReducers } from 'redux';

import initialState from '../store/initialState';
import actionTypes from '../actions/actionTypes';


const cities = (state = initialState.cities, action) => {
	switch (action.type) {
		case actionTypes.ADD_CITY:
			return [
				...state,
				action.payload,
			];
		case actionTypes.REMOVE_CITY:
			return state
				.splice(0, action.payload)
				.concat(state.slice(action.payload + 1));
		default:
			return state;
	}
};

const search = (state = initialState.search, action) => {
	switch (action.type) {
		case actionTypes.SUCCESS_SUGGESTS:
			return { ...state, suggests: action.payload };
		case actionTypes.SET_KEYWORD:
			return { ...state, keyword: action.payload };
		default:
			return state;
	}
};

export default combineReducers({
	cities,
	search,
});

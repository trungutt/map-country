import { combineReducers } from 'redux';

import actionTypes from '../actions/actionTypes';

const initialCities = [];
const cities = (state = initialCities, action) => {
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

const initialSearch = {
	keyword: '',
	suggests: [],
	fetching: false,
	error: false,
};
const search = (state = initialSearch, action) => {
	switch (action.type) {
		case actionTypes.SUCCESS_SUGGESTS:
			return { ...state, suggests: action.payload };
		default:
			return state;
	}
};

export default combineReducers({
	cities,
	search,
});

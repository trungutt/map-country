import actionTypes from '../actions/actionTypes';

const mapReducers = (state = [], action) => {
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

export default mapReducers;

/* @flow */

import initialState from '../store';
import actionTypes from '../actions/actionTypes';


type Search = {
	keyword: string,
	suggests: Array<string>,
	fetching: boolean,
	error: boolean,
}
type SuggestsSuccessAction = {
	type: typeof actionTypes.FETCH_CITIES_FULFILLED,
	payload: Array<string>
};
type SetKeywordAction = {
	type: typeof actionTypes.SET_KEYWORD,
	payload: string
};
type SearchAction = SuggestsSuccessAction | SetKeywordAction;

const search = (state: Search = initialState.search, action: SearchAction): Search => {
	switch (action.type) {
		case actionTypes.FETCH_CITIES_FULFILLED:
			return { ...state, suggests: action.payload, fetching: false, error: false };
		case actionTypes.FETCH_CITIES_PENDING:
			return { ...state, suggests: [], fetching: true, error: false };
		case actionTypes.FETCH_CITIES_REJECTED:
			return { ...state, suggests: [], fetching: false, error: true };
		case actionTypes.SET_KEYWORD:
			return { ...state, keyword: action.payload };
		default:
			return state;
	}
};

export default search;

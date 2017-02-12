/* @flow */

import { connect } from 'react-redux';

import actionTypes from '../actions/actionTypes';
import SearchInput from '../components/SearchInput/SearchInput';
import utils from '../utils';


const mapStateToProps = state => ({
	searchText: state.search.keyword,
	dataSource: state.search.suggests,
});

const mapDispatchToProps = dispatch => ({
	onUpdateInput: (input: string) => {
		dispatch({ type: actionTypes.SET_KEYWORD, payload: input });
		dispatch({ type: actionTypes.FETCH_CITIES, payload: utils.getPlacePredictions(input) });
	},
	onNewRequest: (city: string) => {
		dispatch({ type: actionTypes.ADD_CITY, payload: utils.getGeocodeByAddress(city) });
		dispatch({ type: actionTypes.SET_KEYWORD, payload: '' });
	},
});

const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput);
export default SearchInputContainer;

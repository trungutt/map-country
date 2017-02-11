import { connect } from 'react-redux';
import JSONP from 'jsonp';

import actionTypes from '../actions/actionTypes';
import SearchInput from '../components/SearchInput';


const googleAutoSuggestURL = `
  //suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;
const performSearch = (inputValue, dispatch) => {
	const url = googleAutoSuggestURL + inputValue;

	if (inputValue !== '') {
		JSONP(url, (error, data) => {
			if (error) return error;
			const searchResults = data[1];
			const retrievedSearchTerms = searchResults.map(result => result[0]);
			dispatch({ type: actionTypes.SUCCESS_SUGGESTS, payload: retrievedSearchTerms });
		});
	}
};

const addCity = (city, dispatch) => {
	dispatch({ type: actionTypes.ADD_CITY, payload: city });
	dispatch({ type: actionTypes.SET_KEYWORD, payload: '' });
};

const mapStateToProps = state => ({
	dataSource: state.search.suggests,
});

const mapDispatchToProps = dispatch => ({
	onUpdateInput: (inputValue) => {
		performSearch(inputValue, dispatch);
	},
	onNewRequest: (chosenRequest) => {
		addCity(chosenRequest, dispatch);
	},
});

const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput);
export default SearchInputContainer;

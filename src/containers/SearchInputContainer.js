import { connect } from 'react-redux';
import JSONP from 'jsonp';


import actionTypes from '../actions/actionTypes';
import SearchInput from '../components/SearchInput';

const googleAutoSuggestURL = `
  //suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;
const performSearch = (inputValue, dispatch) => {
	const url = googleAutoSuggestURL + inputValue;

	if (inputValue !== '') {
		dispatch({ type: actionTypes.SET_KEYWORD, payload: inputValue });
		let autocompleteService = new google.maps.places.AutocompleteService();
		autocompleteService.getPlacePredictions({ input: inputValue }, (predictions, status) => {
			const suggests = predictions.map(prediction => prediction.description);
			dispatch({ type: actionTypes.SUCCESS_SUGGESTS, payload: suggests });
		});
	}
};

const addCity = (city, dispatch) => {
	dispatch({ type: actionTypes.ADD_CITY, payload: city });
	dispatch({ type: actionTypes.SET_KEYWORD, payload: '' });
};

const mapStateToProps = state => ({
	searchText: state.search.keyword,
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

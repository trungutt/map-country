import { connect } from 'react-redux';

import actionTypes from '../actions/actionTypes';
import SearchInput from '../components/SearchInput';
import utils from '../utils';


const performSearch = (input, dispatch) => {
	if (input !== '') {
		dispatch({ type: actionTypes.SET_KEYWORD, payload: input });
		const autocompleteService = new google.maps.places.AutocompleteService();
		autocompleteService.getPlacePredictions({ input }, (predictions, status) => {
			if (status !== google.maps.places.PlacesServiceStatus.OK) {
				console.log('error search places');
			} else {
				const suggests = predictions.map(prediction => prediction.description);
				dispatch({ type: actionTypes.SUCCESS_SUGGESTS, payload: suggests });
			}
		});
	}
};

const mapStateToProps = state => ({
	searchText: state.search.keyword,
	dataSource: state.search.suggests,
});

const mapDispatchToProps = dispatch => ({
	onUpdateInput: (input) => {
		performSearch(input, dispatch);
	},
	onNewRequest: (city) => {
		dispatch({ type: 'FETCH_CITY', payload: utils.getGeocodeByAddress(city) });
	},
});

const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput);
export default SearchInputContainer;

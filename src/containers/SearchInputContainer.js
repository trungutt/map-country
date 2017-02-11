import { connect } from 'react-redux';

import actionTypes from '../actions/actionTypes';
import SearchInput from '../components/SearchInput';


const performSearch = (input, dispatch) => {
	if (input !== '') {
		dispatch({ type: actionTypes.SET_KEYWORD, payload: input });
		let autocompleteService = new google.maps.places.AutocompleteService();
		autocompleteService.getPlacePredictions({ input }, (predictions, status) => {
			const suggests = predictions.map(prediction => prediction.description);
			dispatch({ type: actionTypes.SUCCESS_SUGGESTS, payload: suggests });
		});
	}
};

const addCity = (city, dispatch) => {
	dispatch({ type: actionTypes.ADD_CITY, payload: city });
	dispatch({ type: actionTypes.SET_KEYWORD, payload: '' });

	const geocoder = new google.maps.Geocoder();
	geocoder.geocode({ address: city }, (results, status) => {
		const latLng = {
			lat: results[0].geometry.location.lat(),
			lng: results[0].geometry.location.lng(),
		};

		console.log('latLng = ', JSON.stringify(latLng, null, 5));
	});
};

const mapStateToProps = state => ({
	searchText: state.search.keyword,
	dataSource: state.search.suggests,
});

const mapDispatchToProps = dispatch => ({
	onUpdateInput: (input) => {
		performSearch(input, dispatch);
	},
	onNewRequest: (chosenRequest) => {
		addCity(chosenRequest, dispatch);
	},
});

const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput);
export default SearchInputContainer;

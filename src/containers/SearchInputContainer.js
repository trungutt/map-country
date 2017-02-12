import { connect } from 'react-redux';

import actionTypes from '../actions/actionTypes';
import SearchInput from '../components/SearchInput';


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

const addCity = (city, dispatch) => {
	const geocoder = new google.maps.Geocoder();
	geocoder.geocode({ address: city }, (results, status) => {
		if (status !== google.maps.GeocoderStatus.OK) {
			console.log('error geocode');
		}
		const latLng = {
			latitude: results[0].geometry.location.lat(),
			longitude: results[0].geometry.location.lng(),
		};

		dispatch({
			type: actionTypes.ADD_CITY,
			payload: {
				name: city,
				...latLng,
			},
		});
		dispatch({ type: actionTypes.SET_KEYWORD, payload: '' });
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

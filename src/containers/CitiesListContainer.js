/* @flow */

import { connect } from 'react-redux';

import actionTypes from '../actions/actionTypes';
import CitiesList from '../components/CitiesList/CitiesList';


const mapStateToProps = state => ({
	cities: state.cities.map(city => city.name),
});

const mapDispatchToProps = dispatch => ({
	onRemove: (index) => {
		dispatch({ type: actionTypes.REMOVE_CITY, payload: index });
	},
});

const CitiesListContainer = connect(mapStateToProps, mapDispatchToProps)(CitiesList);
export default CitiesListContainer;

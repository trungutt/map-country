/* @flow */

import { connect } from 'react-redux';

import actionTypes from '../actions/actionTypes';
import CitesList from '../components/CitesList';


const mapStateToProps = state => ({
	cities: state.cities.map(city => city.name),
});

const mapDispatchToProps = dispatch => ({
	onRemove: (index) => {
		dispatch({ type: actionTypes.REMOVE_CITY, payload: index });
	},
});

const CitiesListContainer = connect(mapStateToProps, mapDispatchToProps)(CitesList);
export default CitiesListContainer;

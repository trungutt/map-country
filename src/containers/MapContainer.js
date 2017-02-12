import { connect } from 'react-redux';
import { marker, featureGroup } from 'leaflet';

import Map from '../components/Map';


const position = [48.808026, 2.192418];
const position2 = [48.856614, 2.352222];

const getBound = (cities) => {
	if (cities.length === 0) {
		return featureGroup([
			marker(position),
			marker(position2),
		]);
	}

	return featureGroup(cities.map(city => marker([city.latitude, city.longitude])));
};

const mapStateToProps = state => ({
	cities: state.cities,
	bounds: getBound(state.cities) || {},
});

const MapContainer = connect(mapStateToProps)(Map);
export default MapContainer;

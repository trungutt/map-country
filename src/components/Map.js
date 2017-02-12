import React, { PropTypes } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { marker, featureGroup } from 'leaflet';

// eslint-disable-next-line import/no-unresolved,import/extensions,import/no-extraneous-dependencies
import 'leaflet_css';

import CustomMarker from '../components/Marker';


const CustomMap = ({ cities, bounds }) => (
	<Map style={{ height: '100vh' }} bounds={bounds.getBounds()} zoom={1}>
		<TileLayer
			url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		/>
		{cities.map((city, index) => <CustomMarker key={index} city={city} />)}
	</Map>
);

CustomMap.propTypes = {
	cities: PropTypes.array.isRequired,
	bounds: PropTypes.object.isRequired,
};

export default CustomMap;

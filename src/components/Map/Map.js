/* @flow */

import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

// $FlowFixMe
import 'leaflet_css'; // eslint-disable-line


// eslint-enable
import CustomMarker from '../Marker/Marker';
import type { Cities } from '../../reducers/citiesReducer';


type CustomMapArgs = {
	cities: Cities,
	bounds: any
};
const CustomMap = ({ cities, bounds }: CustomMapArgs) => (
	<Map style={{ height: '100vh' }} bounds={bounds.getBounds()} zoom={1}>
		<TileLayer
			url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		/>
		{cities.map((city, index) => <CustomMarker key={index} city={city} />)}
	</Map>
);

export default CustomMap;

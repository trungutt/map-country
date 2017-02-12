/* @flow */

import React from 'react';
import { Marker, Popup } from 'react-leaflet';

import type { City } from '../../reducers/citiesReducer';


type CustomMarkerArgs = {
	city: City,
};
const CustomMarker = ({ city }: CustomMarkerArgs) => (
	<Marker position={[city.latitude, city.longitude]}>
		<Popup>
			<span>{city.name}</span>
		</Popup>
	</Marker>
);

export default CustomMarker;

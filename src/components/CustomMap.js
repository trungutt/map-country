import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { marker, featureGroup, LatLngBounds } from 'leaflet';

// eslint-disable-next-line import/no-unresolved,import/extensions,import/no-extraneous-dependencies
import 'leaflet_css';


const position = [48.808026, 2.192418];
const position2 = [48.856614, 2.352222];

const group = featureGroup([
	marker(position),
	marker(position2),
]);

const a = group.getBounds().getCenter();
const southWest = group.getBounds().getSouthWest();
const northEast = group.getBounds().getNorthEast();
const bounds = new LatLngBounds(southWest, northEast);
console.log('a = ', JSON.stringify(a, null, 5));

const CustomMap = () => (
	<Map style={{ height: '100vh' }} bounds={bounds} zoom={1}>
		<TileLayer
			url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		/>
		<Marker position={position}>
			<Popup>
				<span>A pretty CSS3 popup.<br />Easily customizable.</span>
			</Popup>
		</Marker>
		<Marker position={position2}>
			<Popup>
				<span>A pretty CSS3 popup.<br />Easily customizable.</span>
			</Popup>
		</Marker>
	</Map>
);

export default CustomMap;

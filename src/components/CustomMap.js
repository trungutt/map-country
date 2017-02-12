import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

// eslint-disable-next-line import/no-unresolved,import/extensions,import/no-extraneous-dependencies
import 'leaflet_css';


const position = [48.808026, 2.192418];
const CustomMap = () => (
	<Map style={{ height: '100vh' }} center={position} zoom={13}>
		<TileLayer
			url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		/>
		<Marker position={position}>
			<Popup>
				<span>A pretty CSS3 popup.<br />Easily customizable.</span>
			</Popup>
		</Marker>
	</Map>
);

export default CustomMap;

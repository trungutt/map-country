import React, { PropTypes } from 'react';
import { Marker, Popup } from 'react-leaflet';


const CustomMarker = ({ city }) => (
	<Marker position={[city.latitude, city.longitude]}>
		<Popup>
			<span>{city.name}</span>
		</Popup>
	</Marker>
);

CustomMarker.propTypes = {
	city: PropTypes.object.isRequired,
};

export default CustomMarker;

const getGeocodeByAddress = (address) => {
	const geocoder = new google.maps.Geocoder();
	const ok = google.maps.GeocoderStatus.OK;

	return new Promise((resolve, reject) => {
		geocoder.geocode({ address }, (results, status) => {
			if (status !== ok) {
				reject(status);
			} else {
				resolve({
					name: address,
					latitude: results[0].geometry.location.lat(),
					longitude: results[0].geometry.location.lng(),
				});
			}
		});
	});
};

export default getGeocodeByAddress;

const getPlacePredictions = (input) => {
	const autocompleteService = new google.maps.places.AutocompleteService();
	const ok = google.maps.places.PlacesServiceStatus.OK;

	return new Promise((resolve, reject) => {
		autocompleteService.getPlacePredictions({ input }, (predictions, status) => {
			if (status !== ok) {
				reject(status);
			} else {
				resolve(predictions.map(prediction => prediction.description));
			}
		});
	});
};

export default getPlacePredictions;

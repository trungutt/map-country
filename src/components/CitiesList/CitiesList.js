/* @flow */

import React from 'react';
import { List } from 'material-ui';

import City from '../City/City';


type CitiesListArgs = {
	cities: Array<string>,
	onRemove: Function,
};
const CitiesList = ({ cities, onRemove }: CitiesListArgs) => (
	<div>
		<List>
			{cities.map((city, index) =>
				<City key={index} city={city} index={index} onRemove={onRemove} />,
			)}
		</List>
	</div>
);

export default CitiesList;

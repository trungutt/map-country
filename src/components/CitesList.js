/* @flow */

import React from 'react';
import { List } from 'material-ui';

import City from './City';


type CitesListArgs = {
	cities: Array<string>,
	onRemove: Function,
};
const CitesList = ({ cities, onRemove }: CitesListArgs) => (
	<div>
		<List>
			{cities.map((city, index) =>
				<City key={index} city={city} index={index} onRemove={onRemove} />,
			)}
		</List>
	</div>
);

export default CitesList;

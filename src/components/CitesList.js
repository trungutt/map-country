import React, { PropTypes } from 'react';
import { List } from 'material-ui';

import City from './City';


const CitesList = ({ cities }) => (
	<div>
		<List>
			{cities.map((city, index) =>
				<City key={index} city={city} />,
			)}
		</List>
	</div>
);

CitesList.propTypes = {
	cities: PropTypes.array.isRequired,
};

export default CitesList;

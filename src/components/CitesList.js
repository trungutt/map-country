import React, { PropTypes } from 'react';
import { List } from 'material-ui';

import City from './City';


const CitesList = ({ cities, onRemove }) => (
	<div>
		<List>
			{cities.map((city, index) =>
				<City key={index} city={city} index={index} onRemove={onRemove} />,
			)}
		</List>
	</div>
);

CitesList.propTypes = {
	cities: PropTypes.array.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default CitesList;

import React, { PropTypes } from 'react';
import { ListItem, Divider } from 'material-ui';

import DeleteButton from './DeleteButton';


const City = ({ city }) => (
	<div>
		<ListItem
			rightIconButton={DeleteButton}
			primaryText={city}
		/>
		<Divider />

	</div>
);

City.propTypes = {
	city: PropTypes.string.isRequired,
};

export default City;

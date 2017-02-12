import React, { PropTypes } from 'react';
import { ListItem, Divider, IconButton } from 'material-ui';
import ActionDelete from 'material-ui/svg-icons/action/delete';


const City = ({ city, index, onRemove }) => (
	<div>
		<ListItem
			rightIconButton={
				<IconButton
					touch={true}
					tooltipPosition="bottom-left"
					onClick={(e) => {
						e.preventDefault();
						onRemove(index);
					}}
				>
					<ActionDelete />
				</IconButton>
			}
			primaryText={city}
		/>
		<Divider />

	</div>
);

City.propTypes = {
	city: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default City;

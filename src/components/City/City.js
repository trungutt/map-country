/* @flow */

import React from 'react';
import { ListItem, Divider, IconButton } from 'material-ui';
import ActionDelete from 'material-ui/svg-icons/action/delete';


type CityArgs = {
	city: string,
	index: number,
	onRemove: Function,
};
const City = ({ city, index, onRemove }: CityArgs) => (
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

export default City;

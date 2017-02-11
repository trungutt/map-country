import React from 'react';
import { IconButton } from 'material-ui';
import ActionDelete from 'material-ui/svg-icons/action/delete';


const DeleteButton = (
	<IconButton
		touch={true}
		tooltipPosition="bottom-left"
	>
		<ActionDelete />
	</IconButton>
);

export default DeleteButton;

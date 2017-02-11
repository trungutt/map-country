import React, { PropTypes } from 'react';
import { AutoComplete } from 'material-ui';


const SearchInput = ({ dataSource, onUpdateInput, onNewRequest }) => (
	<AutoComplete
		floatingLabelText="Search country"
		dataSource={dataSource}
		onUpdateInput={(text) => {
			onUpdateInput(text);
		}}
		onNewRequest={onNewRequest}
		fullWidth={true}
	/>
);

SearchInput.propTypes = {
	onUpdateInput: PropTypes.func.isRequired,
	onNewRequest: PropTypes.func.isRequired,
	dataSource: PropTypes.array.isRequired,
};

export default SearchInput;

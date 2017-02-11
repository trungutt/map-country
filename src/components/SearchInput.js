import React, { PropTypes } from 'react';
import { AutoComplete } from 'material-ui';


const SearchInput = ({ searchText, dataSource, onUpdateInput, onNewRequest }) => (
	<AutoComplete
		floatingLabelText="Search city"
		searchText={searchText}
		filter={AutoComplete.caseInsensitiveFilter}
		dataSource={dataSource}
		onUpdateInput={(text) => {
			onUpdateInput(text);
		}}
		onNewRequest={onNewRequest}
		fullWidth={true}
	/>
);

SearchInput.propTypes = {
	searchText: PropTypes.string.isRequired,
	onUpdateInput: PropTypes.func.isRequired,
	onNewRequest: PropTypes.func.isRequired,
	dataSource: PropTypes.array.isRequired,
};

export default SearchInput;

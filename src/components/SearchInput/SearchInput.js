/* @flow */

import React from 'react';
import { AutoComplete } from 'material-ui';


type SearchInputArgs = {
	searchText: string,
	dataSource: Array<string>,
	onUpdateInput: Function,
	onNewRequest: Function,
};
const SearchInput = ({ searchText, dataSource, onUpdateInput, onNewRequest }: SearchInputArgs) => (
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

export default SearchInput;

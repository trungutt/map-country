import React, { Component } from 'react';
import { AutoComplete } from 'material-ui';
import JSONP from 'jsonp';


const googleAutoSuggestURL = `
  //suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;

class SearchInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: [],
			inputValue: '',
		};

		this.onUpdateInput = this.onUpdateInput.bind(this);
		this.onNewRequest = this.onNewRequest.bind(this);
	}

	onUpdateInput(inputValue) {
		this.setState({
			inputValue,
		}, () => {
			this.performSearch();
		});
	}

	onNewRequest(chosenRequest, index) {
		console.log('chosenRequest = ', JSON.stringify(chosenRequest, null, 5));
		console.log('index = ', JSON.stringify(index, null, 5));
	}

	performSearch() {
		const url = googleAutoSuggestURL + this.state.inputValue;

		if (this.state.inputValue !== '') {
			JSONP(url, (error, data) => {
				if (error) return error;
				const searchResults = data[1];
				const retrievedSearchTerms = searchResults.map(result => result[0]);
				this.setState({
					dataSource: retrievedSearchTerms,
				});
			});
		}
	}


	render() {
		return (
			<AutoComplete
				floatingLabelText="Search country"
				dataSource={this.state.dataSource}
				onUpdateInput={this.onUpdateInput}
				onNewRequest={this.onNewRequest}
			/>
		);
	}
}

export default SearchInput;

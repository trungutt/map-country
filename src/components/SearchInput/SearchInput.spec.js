import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SearchInput from './SearchInput';


const setup = () => {
	const props = {
		searchText: 'Chaville',
		dataSource: ['Paris', 'Viroflay'],
		onUpdateInput: input => input,
		onNewRequest: input => input,
	};

	return shallow(<SearchInput {...props} />);
};

describe('test CitiesList Component', () => {
	it('renders list of ListItem', () => {
		const wrapper = setup();
		expect(wrapper.find('AutoComplete').length).to.equal(1);
	});
});

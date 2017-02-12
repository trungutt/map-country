/* @flow */

import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import CitiesList from './CitiesList';


const setup = () => {
	const props = {
		cities: [
			'Paris',
			'Chaville',
		],
		onRemove: index => index,
	};

	return shallow(<CitiesList {...props} />);
};

describe('test CitiesList Component', () => {
	it('renders list of ListItem', () => {
		const wrapper = setup();
		expect(wrapper.find('List').length).to.equal(1);
		expect(wrapper.find('City').length).to.equal(2);
	});
});

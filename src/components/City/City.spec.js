/* @flow */

import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import City from './City';


const setup = () => {
	const props = {
		city: 'Chaville',
		index: 1,
		onRemove: index => index,
	};

	return shallow(<City {...props} />);
};

describe('test City Component', () => {
	it('renders ListItem', () => {
		const wrapper = setup();
		expect(wrapper.find('ListItem').length).to.equal(1);
	});
});

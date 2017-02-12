/* @flow */

import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Marker from './Marker';


const setup = () => {
	const props = {
		city: {
			name: 'Paris',
			latitude: 48.856614,
			longitude: 2.352222,
		},
	};

	return shallow(<Marker {...props} />);
};

describe('test CitiesList Component', () => {
	it('renders list of ListItem', () => {
		const wrapper = setup();
		expect(wrapper.find('Marker').length).to.equal(1);
	});
});

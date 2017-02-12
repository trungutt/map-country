/* @flow */

import { describe, it } from 'mocha';
import { expect } from 'chai';

import cities from './citiesReducer';
import actionTypes from '../actions/actionTypes';

describe('reducers on cities CRUD', () => {
	const initialState = {
		cities: [
			{
				name: 'Paris',
				latitude: 48.856614,
				longitude: 2.352222,
			},
			{
				name: 'Versailles',
				latitude: 48.804865,
				longitude: 2.120355,
			},
		],
	};

	it('add a city', () => {
		const expectedCities = cities(
			initialState.cities,
			{
				type: actionTypes.FETCH_CITY_FULFILLED,
				payload: {
					name: 'Chaville',
					latitude: 48.808026,
					longitude: 2.192418,
				},
			},
		);
		expect(expectedCities).to.deep.equal([
			{
				name: 'Paris',
				latitude: 48.856614,
				longitude: 2.352222,
			},
			{
				name: 'Versailles',
				latitude: 48.804865,
				longitude: 2.120355,
			},
			{
				name: 'Chaville',
				latitude: 48.808026,
				longitude: 2.192418,
			},
		]);
	});

	it('remove a city', () => {
		const expected = cities(initialState.cities, { type: actionTypes.REMOVE_CITY, payload: 1 });
		expect(expected).to.deep.equal([
			{
				name: 'Paris',
				latitude: 48.856614,
				longitude: 2.352222,
			},
		]);
	});
});

import { describe, it } from 'mocha';
import { expect } from 'chai';

import mapReducers from './reducers';
import actionTypes from '../actions/actionTypes';

describe('reducers CRUD', () => {
	const initialMap = {
		countries: ['Paris', 'Versailles'],
	};

	it('add a city', () => {
		const todos = mapReducers(initialMap.countries, { type: actionTypes.ADD_CITY, payload: 'Chaville' });
		expect(todos).to.deep.equal(['Paris', 'Versailles', 'Chaville']);
	});

	it('remove a city', () => {
		const todos = mapReducers(initialMap.countries, { type: actionTypes.REMOVE_CITY, payload: 1 });
		expect(todos).to.deep.equal(['Paris']);
	});
});

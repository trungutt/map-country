/* @flow */

import { describe, it } from 'mocha';
import { expect } from 'chai';

import search from './searchReducer';
import actionTypes from '../actions/actionTypes';

describe('reducers on search', () => {
	const initialState = {
		search: {
			keyword: '',
			suggests: [],
			fetching: false,
			error: false,
		},
	};

	it('success suggests', () => {
		const expectedSearch = search(
			initialState.search,
			{
				type: actionTypes.SUCCESS_SUGGESTS,
				payload: [
					'Chaville, Haut de Seine',
					'Viroflay, France',
				],
			},
		);
		expect(expectedSearch).to.deep.equal({
			keyword: '',
			suggests: [
				'Chaville, Haut de Seine',
				'Viroflay, France',
			],
			fetching: false,
			error: false,
		});
	});

	it('set keyword', () => {
		const expectedSearch = search(
			initialState.search,
			{
				type: actionTypes.SET_KEYWORD,
				payload: 'new keyword',
			},
		);
		expect(expectedSearch).to.deep.equal({
			keyword: 'new keyword',
			suggests: [],
			fetching: false,
			error: false,
		});
	});
});

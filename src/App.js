/* @flow */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styled from 'styled-components';


import SearchInputContainer from './containers/SearchInputContainer';
import CitiesListContainer from './containers/CitiesListContainer';
import MapContainer from './containers/MapContainer';


/* Needed for onTouchTap */
injectTapEventPlugin();

const Parent = styled.div`
	display: flex;
`;
const Left = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	align-items: flex-start;
`;
const Right = styled.div`
	flex-grow: 3;
`;

const App = () => (
	<MuiThemeProvider>
		<div>
			<Parent>
				<Left>
					<SearchInputContainer />
					<CitiesListContainer />
				</Left>
				<Right>
					<MapContainer />
				</Right>
			</Parent>
		</div>
	</MuiThemeProvider>
);

export default App;

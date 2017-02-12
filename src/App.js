/* @flow */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SearchInputContainer from './containers/SearchInputContainer';
import CitiesListContainer from './containers/CitiesListContainer';
import MapContainer from './containers/MapContainer';

import './App.css';

/* Needed for onTouchTap */
injectTapEventPlugin();

const App = () => (
	<MuiThemeProvider>
		<div>
			<div className="parent">
				<div className="left">
					<SearchInputContainer />
					<CitiesListContainer />
				</div>
				<div className="right">
					<MapContainer />
				</div>
			</div>
		</div>
	</MuiThemeProvider>
);

export default App;

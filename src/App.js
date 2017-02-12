import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SearchInputContainer from './containers/SearchInputContainer';
import CitiesListContainer from './containers/CitiesListContainer';
import MapContainer from './containers/MapContainer';


/* Needed for onTouchTap */
injectTapEventPlugin();

const App = () => (
	<MuiThemeProvider>
		<div>
			<SearchInputContainer />
			<CitiesListContainer />
			<MapContainer />
		</div>
	</MuiThemeProvider>
);

export default App;

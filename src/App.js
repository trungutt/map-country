import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SearchInputContainer from './containers/SearchInputContainer';
import CitiesListContainer from './containers/CitiesListContainer';
import CustomMap from './components/CustomMap';


/* Needed for onTouchTap */
injectTapEventPlugin();

const App = () => (
	<MuiThemeProvider>
		<div>
			<SearchInputContainer />
			<CitiesListContainer />
			<CustomMap />
		</div>
	</MuiThemeProvider>
);

export default App;

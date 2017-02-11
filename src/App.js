import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SearchInputContainer from './containers/SearchInputContainer';


/* Needed for onTouchTap */
injectTapEventPlugin();

const App = () => (
	<MuiThemeProvider>
		<div>
			<SearchInputContainer />
		</div>
	</MuiThemeProvider>
);

export default App;

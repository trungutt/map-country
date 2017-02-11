import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SearchInput from './SearchInput';


/* Needed for onTouchTap */
injectTapEventPlugin();

const App = () => (
	<MuiThemeProvider>
		<SearchInput />
	</MuiThemeProvider>
);

export default App;

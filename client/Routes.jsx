import React from 'react';
import store from './store';
import {Route, Router, browserHistory} from 'react-router';
import Index from './components/Index.js'
import CreateBoardContainer from './containers/CreateBoardContainer.js'

export default function Routes() {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={Index}>
				<Route path='/myboards' component={CreateBoardContainer} />
			</Route>
		</Router>
	);
}

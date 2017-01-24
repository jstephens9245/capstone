import React from 'react';
import store from './store';
import {Route, Router, browserHistory} from 'react-router';

function Index() {
	return <h1>Capstone</h1>;
}

export default function Routes() {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={Index}>
			</Route>
		</Router>
	);
}

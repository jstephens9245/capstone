import React from 'react';
import store from './store';
import {Route, Router, browserHistory} from 'react-router';

//containers
import BoardContainer from './containers/BoardContainer';
import CreateBoardContainer from './containers/CreateBoardContainer';
import Signup from './containers/SignupContainer';

//components
import Index from './components/Index';

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Index}>
      <Route path="/signup" component={Signup} />
      <Route path="/myboards" component={CreateBoardContainer} />
      </Route>
      <Route path='/boards/:boardId' component={BoardContainer}/>
    </Router>
  );
}

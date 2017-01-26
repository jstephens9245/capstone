import React from 'react';
import store from './store';
import {Route, Router, browserHistory} from 'react-router';


//containers
import BoardContainer from './containers/BoardContainer';
import CreateBoardContainer from './containers/CreateBoardContainer';

import Signup from './containers/SignupContainer';
import {getBoard} from './actions/board';

//components
import Index from './components/Index';

function onBoardEnter(nextRouterState) {
  const boardId = nextRouterState.params.boardId;
  store.dispatch(getBoard(boardId));
}

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Index}>
      <Route path="/signup" component={Signup} />
      <Route path="/myboards" component={CreateBoardContainer} />
      <Route path='/boards/:boardId' component={BoardContainer} onEnter={onBoardEnter}/>
      </Route>


    </Router>
  );
}

import React from 'react';
import store from './store';
import {Route, Router, browserHistory} from 'react-router';
import BoardContainer from './containers/BoardContainer';
import Signup from './containers/SignupContainer';
import {getBoard} from './actions/board';

function Index() {
  return <h1>Capstone</h1>;
}

function onBoardEnter(nextRouterState) {
  const boardId = nextRouterState.params.boardId;
  store.dispatch(getBoard(boardId));
}

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Index}/>
      <Route path="/signup" component={Signup}>
      </Route>
      <Route path='/boards/:boardId' component={BoardContainer} onEnter={onBoardEnter}/>

    </Router>
  );
}

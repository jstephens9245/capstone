import React from 'react';
import store from './store';
import {Route, Router, browserHistory} from 'react-router';

//containers
import BoardContainer from './containers/BoardContainer';
import CreateBoardContainer from './containers/CreateBoardContainer';
import SignupContainer from './containers/SignupContainer';
import SocketIOContainer from './containers/SocketIOContainer';

//action-creators
import {getBoard, getAllBoards} from './actions/board';

//components
import Index from './components/Index';

//onEnters
function onBoardEnter(nextRouterState) {
  const boardId = nextRouterState.params.boardId;
  store.dispatch(getBoard(boardId));
}

function onMyBoardEnter(nextRouterState) {
  const userId = store.getState().userReducer.loggedInUser.id;
  // console.log(userId);
  store.dispatch(getAllBoards(userId));
}

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Index}>
       <Route path='/boards/:boardId' component={BoardContainer} onEnter={onBoardEnter} />
       <Route path="/signup" component={SignupContainer} />
       <Route path="/myboards" component={CreateBoardContainer} onEnter={onMyBoardEnter} />
       <Route path="/sockets" component={SocketIOContainer} />
      </Route>
    </Router>
  );
}

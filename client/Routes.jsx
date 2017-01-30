import React from 'react';
import store from './store';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';

//containers
import BoardContainer from './containers/BoardContainer';
import CreateBoardContainer from './containers/CreateBoardContainer';
import CreateNoteContainer from './containers/CreateNoteContainer';
import SignupContainer from './containers/SignupContainer';
import SocketIOContainer from './containers/SocketIOContainer';

//action-creators
import {getBoard, getAllBoards} from './actions/board';

//components
import Index from './components/Index';

// //socket-io
import socketClient from 'socket.io-client';
export const io =  socketClient;

//onEnters
function onBoardEnter(nextRouterState) {
  const boardId = nextRouterState.params.boardId;
  store.dispatch(getBoard(boardId));
}

function onMyBoardEnter(nextRouterState) {
  const userId = store.getState().userReducer.loggedInUser.id;
  store.dispatch(getAllBoards(userId));
}

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Index}>
       <Route path='/boards/:boardId' component={BoardContainer} onEnter={onBoardEnter} />
       <Route path="/signup" component={SignupContainer} />
       <Route path="/myboards" component={CreateBoardContainer} onEnter={onMyBoardEnter} />
       <Route path="/note">
         <IndexRoute component={CreateNoteContainer} />
       </Route>
      <Route path="/sockets/:room" component={SocketIOContainer} />
      </Route>
    </Router>
  );
}

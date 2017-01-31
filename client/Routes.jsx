import React from 'react';
import store from './store';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';

//containers
import BoardContainer from './containers/BoardContainer';
import CreateBoardContainer from './containers/CreateBoardContainer';
import CreateNoteContainer from './containers/CreateNoteContainer';
import SignupContainer from './containers/SignupContainer';
import ParticipantsContainer from './containers/ParticipantsContainer';

//action-creators
import {getBoard, getAllBoards} from './actions/board';
import {getNotes} from './actions/noteboard';

//components
import Index from './components/Index';


//onEnters
function onBoardEnter(nextRouterState) {
  const boardId = nextRouterState.params.boardId;
  store.dispatch(getBoard(boardId));
  store.dispatch(getNotes());
}

function onMyBoardEnter(nextRouterState) {
  store.dispatch(getAllBoards());
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
      <Route path="/participants/:room" component={ParticipantsContainer} />
      </Route>
    </Router>
  );
}

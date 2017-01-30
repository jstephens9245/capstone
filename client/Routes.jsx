import React from 'react';
import store from './store';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';

//containers
import BoardContainer from './containers/BoardContainer';
import CreateBoardContainer from './containers/CreateBoardContainer';
import CreateNoteContainer from './containers/CreateNoteContainer';
import ViewNoteContainer from './containers/ViewNoteContainer';
import SignupContainer from './containers/SignupContainer';

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
         <Route path=":id" component={ViewNoteContainer} />
       </Route>
      </Route>
    </Router>
  );
}

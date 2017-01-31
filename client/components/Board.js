import React from 'react';
import NoteBoard from './NoteBoard';
import NoteBoardContainer from '../containers/NoteBoardContainer';


export default (props) => {

  return (

    <div className="col-xs-12" key={ props.board.id }>
      <h2 className="text-center">
        <span>{ props.board.name }</span>
      </h2>
      <div>
        <div className="screen col-xs-12">
          <NoteBoardContainer/>
        </div>
      </div>
  </div>
  );
};

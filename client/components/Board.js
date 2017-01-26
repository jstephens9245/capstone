import React from 'react';

export default (props) => {

  console.log('IN BOARD', props);
  return (
      <div className="boardContainer col-md-1 col-centered">
          <h1 className="text-center">{props.board.name}</h1>
           <div className="container-fluid">
             <div className='row'>
             </div>
           </div>
      </div>
  );
};

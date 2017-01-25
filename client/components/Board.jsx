import React from 'react';


export default (props) => {
  console.log('IN BOARD', props);
  return (
         <div className="col-lg-1 col-centered">
            <h1>{props.board.name}</h1>
            <p>asdfljkadsfjklas</p>
        </div>
  );
};

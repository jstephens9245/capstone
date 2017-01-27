import React from 'react';


export default (props) => {

  const table = [];

  const notes = [ {id: 1, img: '/assets/postit.jpeg'}, {id: 2, img: '/assets/postit.jpeg'}, {id: 3, img: '/assets/postit.jpeg'}, {id: 1, img: '/assets/postit.jpeg'} ];
  // console.log(notes);


  console.log('IN BOARD', props);
  return (

    <div className="col-xs-12" key={ props.board.id }>
      <h2 className="text-center">
        <span>{ props.board.name }</span>
      </h2>
      <div>
        <div className="screen col-xs-12">
          {
            notes.map((note) => {
              return (
                <div>
                  <div className="note">
                    <img src={note.img} />
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
  </div>
  );
};

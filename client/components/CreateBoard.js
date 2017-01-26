import React from 'react';
import {Link} from 'react-router';

const CreateBoard = (props) => {
  const boards = props.boards;
  return (
    <div>
      <div style={{paddingLeft: '8.5%'}}>
        <h3>Boards</h3>
      </div>
      <div className="row">
        {
          boards && boards.map((board) => (
            <div className="col-xs-12 col-md-6 col-lg-3 col-xs-offset-1" key={ board.id }>
              <Link className="thumbnail" to={`/myboards/${board.id}`}>
              {/* <Board board={board} /> */}
              <div className="caption">
                <h5>
                  <span>{ board.name }</span>
                </h5>
              </div>
            </Link>
          </div>
        ))
      }
          <div className="col-xs-12 col-md-6 col-lg-3 col-xs-offset-1">
          <a className='addBoard thumbnail'>+</a>
          </div>

      </div>
    </div>
  );
};
export default CreateBoard;

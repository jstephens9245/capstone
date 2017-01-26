import React from 'react';
import {Link} from 'react-router';
import ModalContainer from '../containers/ModalContainer';

const CreateBoard = (props) => {
  const boards = props.boards;
  return (
    <div>
      <div style={{paddingLeft: '8.5%'}}>
        <h3>Boards</h3>
      </div>
      <div className="row">
        {
          !!boards.length && boards.map((board) => (
            <div className="col-xs-10 col-md-8 col-lg-4 col-xs-offset-1" key={ board.id }>
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
          <div className="col-xs-10 col-md-8 col-lg-4 col-xs-offset-1">
          <ModalContainer createBoard={props.create}/>
          </div>

      </div>
    </div>
  );
};
export default CreateBoard;

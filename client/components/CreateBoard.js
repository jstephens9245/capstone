import React from 'react';
import {Link} from 'react-router';

const boards = [
	{ id: 1, name: 'board1'},
	{ id: 2, name: 'board2'}
]

const CreateBoard = (props) => {
	// const boards = props.boards;

  return (
	<div>
		<h3>Boards</h3>
		<div className="row">
			{
				boards && boards.map(board => (
					<div className="col-xs-4" key={ board.id }>
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
			<div className="col-xs-4" style={{ textAlign: 'center',
				backgroundColor: 'grey', paddingBottom: '8%'}}>
				<a style={{textDecoration: 'none', color: 'black'}}>+</a>
			</div>
		</div>
	</div>
  )
}
export default CreateBoard;

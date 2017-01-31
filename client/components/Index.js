import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import SidebarContainer from '../containers/SidebarContainer';


import NavbarContainer from '../containers/NavbarContainer';

const Index = (props) => {
  return (
    <div>
      <NavbarContainer />
      <div >
        {/* <div className="col-xs-2 col-md-2 col-lg-2 sidebar" style={{marginTop: 50}}> */}
          <SidebarContainer />
        {/* </div> */}
        {
          props.children && React.cloneElement(props.children, props)
        }

      </div>
    </div>

  );
};

export default DragDropContext(HTML5Backend)(Index);

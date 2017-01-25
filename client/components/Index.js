import React from 'react';

import NavbarContainer from '../containers/NavbarContainer';

const Index = (props) => {
  return (
    <div>
      <NavbarContainer />
      <div className="col-xs-10" >
        {
          props.children && React.cloneElement(props.children, props)
        }
        Welcome For nowww...
      </div>
    </div>

  );
};

export default Index;

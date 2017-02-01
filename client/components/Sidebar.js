import React from 'react';
import {Link} from 'react-router';

export default function(props) {
  return (
    <div id="wrapper" className={`${props.sidebarToggle ? 'toggled' : '' }`} >
     <div id="sidebar-wrapper">
         <ul className="sidebar-nav">
             <li className="sidebar-brand">
                 <a href="#">
                     Start Bootstrap
                 </a>
             </li>
             <li>
                 <div style={{color: '#999999'}}>
                   <h4 className="menu-item" onClick={() => { props.toggleTemplate('boardTemplateToggle'); }}>
                     <div>Template</div>
                   </h4>
                   { props.boardTemplateToggle ? (
                     <label style={{paddingLeft: '5%'}}>Toggling</label>
                     ) : null }

                 </div>
             </li>
             <li>
                 <a href="#">Shortcuts</a>
             </li>
         </ul>
     </div>
   </div>
  );
}


// colorArr.map((color, i) => {
//   return <div key={i}>
//     <p style={{marginLeft: 25}}><input type="checkbox" id="cbox1" value="color"
//       onChange={() => {props.addToFilter('color', color)}} /> {color}</p>
//     </div>
// })

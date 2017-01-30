// import React from 'react';
// import {DropTarget} from 'react-dnd';
// import Note from './Note';
//
//
// const styles = {
//   width   : 1000,
//   height  : 1000,
//   position: 'relative'
// };
// export default (props) => {
//
//
//   const {notes, connectDropTarget} = props.noteObj;
//
//   return connectDropTarget(
//     <div style={styles}>
//       {Object.keys(notes).map((key) => {
//         console.log('IN CONNECTadsfasdf', notes[key]);
//         const { left, top, title } = notes[key];
//         return (
//           <Note
//             key={key}
//             id={key}
//             left={left}
//             top={top}
//           >
//             {title}
//           </Note>
//         );
//       })}
//     </div>
//   );
// };
//
//
// //
// //   let tablehtml = '';
// //
// //   for (let row = 0; row < 25; row++) {
// //     tablehtml += '<tr id=\'row+' + row + '\'>';
// //     for (let height = 0; height < 25; height++) {
// //       tablehtml += '<td data-status=\'dead\' id=\'' + height + '-' + row + '\'>
// //       <img src=\'/assets/postit.jpeg\'/>
// //       </td>';
// //     }
// //     tablehtml += '</tr>';
// //   }
// //
// //
// //   const notes = [ {id: 1, img: '/assets/postit.jpeg'},
// //   {id: 2, img: '/assets/postit.jpeg'}, {id: 3, img: '/assets/postit.jpeg'},
// //   {id: 4, img: '/assets/postit.jpeg'} ];
// //   // console.log(notes);
// //
// //
// //   console.log('IN BOARD', props);
// //   return (
// //           <div>
// //             <table id="table">
// //               <tbody dangerouslySetInnerHTML={{__html: tablehtml}} />
// //             </table>
// //           </div>
// //   );
// // }

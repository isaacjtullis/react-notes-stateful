import React from 'react';
const Note = props => {
  return(
    <div>
      {props.name}
    </div>
  );
}

export default Note;

/*
<input
  type="text"
  value={props.noteName}
  onChange={props.handleNewNoteName}
/>
*/

import React from 'react';
import NoteSection from './NoteSection.js';

const Note = props => {
  return(
    <div className={props.noteSelected}>
      <li onClick={props.handleNoteSelected}>
        {props.name}
      </li>
    </div>
  );
}
//This file will pass in the handleNotenameChange and will pass it into noteFORM so i need
//to change things around a bit.
export default Note;

/*
<div className="noteForm">
  {props.name}
  <input
    type="text"
    value={props.name}
    onChange={props.handleNewNoteName}
  />
</div>
<input
  type="text"
  value={props.noteName}
  onChange={props.handleNewNoteName}
/>
*/

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

export default Note;

import React from 'react';
import ChangeNote from './ChangeNote.js';

const NoteSection = (props) => {
  let noteData = props.notes.map((note)=>{

    if (props.selectedNote === note.id) {
      let handleButtonClick = () => props.handleButtonClick(note.id)
      return(
        <ChangeNote
          name = {note.noteName}
          body = {note.body}
          handleNoteBody = {props.handleNoteBody}
          handleButtonClick = {handleButtonClick}
        />
      )
    }
  })
  return(
    <div>
      {noteData}
    </div>
  )
}

export default NoteSection;

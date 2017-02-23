import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
const NoteList = props => {
  let noteData = props.notes.map((note)=>{
    let handleNoteSelected = () => props.handleNoteSelected(note.id)
    let noteSelected = ""
    if (props.selectedNote === note.id) {
      noteSelected = "selected"
    }
    return(
      <Note
        name={note.noteName}
        handleNoteSelected={handleNoteSelected}
        noteSelected={noteSelected}
      />
    )
  })

  return(
    <div>
      {noteData}
    </div>
  )
}

export default NoteList;

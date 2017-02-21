import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';

const NoteList = props => {
  let noteName = props.notes.map((note) => {
    return (
      <div>
        {note.noteName}
      </div>
    )
  })
  return (
    <div>
      {noteName}
    </div>
  )
}

export default NoteList;

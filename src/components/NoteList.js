import React from 'react';
import Note from './Note.js';

const NoteList = props => {
  return (
    <div className="small-12 controls columns">
      <div className="small-3 columns">
        <button><i className="fa fa-sticky-note-o" aria-hidden="true">New Note</i></button>
      </div>
      <div className="small-9 columns">
        <input type="text" placeholder="search"></input>
      </div>
      <div></div>
    </div>
  )
}

export default NoteList;

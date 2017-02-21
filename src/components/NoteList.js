import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
class NoteList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      noteName: 'New Note',
    }
  }

  render() {
    let noteName = this.props.notes.map((note) => {
      let name = note.nameName
      return (
        <div>
          <Note name={note.noteName}/>
        </div>
      )
    })
    return(
      <div>
        {noteName}
      </div>
    )
  }
}

export default NoteList;
/*

*/

import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
class NoteList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      noteName: '',
    }
  }

  render() {
    let noteName = this.props.notes.map((note) => {
      return (
        <div>
          <Note />
          {note.noteName}
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

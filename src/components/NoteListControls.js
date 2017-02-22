import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
import NoteList from './NoteList.js';
import NoteSection from './NoteSection.js';

class NoteListControls extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      noteName: "New Note",
      notes: [],
      selectedNote: null
    }
    this.handleNewNoteName = this.handleNewNoteName.bind(this)
    this.handleNoteFormSubmit = this.handleNoteFormSubmit.bind(this)
    this.handleNoteSelected = this.handleNoteSelected.bind(this)
  }

  handleNoteFormSubmit(event){
    event.preventDefault()
    let newId = this.state.notes.length
    let newNote = {
      id: newId,
      noteName: this.state.noteName
    }
    let newNotes = [...this.state.notes, newNote]
    this.setState({
      notes: newNotes,
    })
  }

  handleNewNoteName(event){

    let newName = event.target.value
    this.setState({ noteName: newName})
  }

  handleNoteSelected(id){
    let note = id
    this.setState({selectedNote: note})
  }

  render() {
    return(
      <div>
        <div className="small-4 large-4 columns">
          <NoteForm
            handleNoteFormSubmit={this.handleNoteFormSubmit}
          />
          <NoteList
            notes={this.state.notes}
            handleNoteSelected={this.handleNoteSelected}
            selectedNote={this.state.selectedNote}
          />
        </div>
        <div className="small-4 large-4 columns">
          <NoteSection
            handleNewNoteName={this.handleNewNoteName}
            handleNoteSelected={this.handleNoteSelected}
          />
        </div>
      </div>
    )
  }
}

export default NoteListControls;
/*
return(
  <Note
    name={this.props.noteName}
    handleNewNoteName={this.props.handleNewNoteName}
  />
)
*/

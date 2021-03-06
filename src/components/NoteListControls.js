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
      body: "New Note",
      notes: [],
      selectedNote: null
    }
    this.handleNoteBody = this.handleNoteBody.bind(this)
    this.handleNoteFormSubmit = this.handleNoteFormSubmit.bind(this)
    this.handleNoteSelected = this.handleNoteSelected.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleNoteFormSubmit(event){
    event.preventDefault()
    let newId = this.state.notes.length
    let newNote = {
      id: newId,
      noteName: this.state.noteName,
      body: this.state.body
    }
    let newNotes = [...this.state.notes, newNote]
    this.setState({
      notes: newNotes,
    })
  }

  handleNoteBody(event){
    let noteBody = event.target.value
    this.setState({ body: noteBody})
  }

  handleNoteSelected(id){
    let note = id
    this.setState({selectedNote: note})
  }

  handleButtonClick(id) {
    let newNote = {
      id: id,
      noteName: this.state.noteName,
      body: this.state.body
    }
    this.state.notes[id] = newNote
    if(newNote.body.length < 36) {
      this.state.notes[id].noteName = this.state.body
    } else {
      this.state.notes[id].noteName = "Noted"
    }
    this.setState({body: 'New Note'})
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
            handleNoteBody={this.handleNoteBody}
            handleNoteSelected={this.handleNoteSelected}
            notes={this.state.notes}
            selectedNote={this.state.selectedNote}
            handleButtonClick={this.handleButtonClick}
          />
        </div>
      </div>
    )
  }
}

export default NoteListControls;

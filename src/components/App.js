import React from 'react';
import FolderForm from './FolderForm.js';
import NoteList from './NoteList.js';
import Note from './Note.js';
import FolderList from './FolderList.js';

const data = {
  folders: [ {
      id: 1,
      name: 'Useful Regular Expressions',
      notes: []
    },
    {
      id: 2,
      name: 'App Ideas',
      notes: [1, 2, 3]
    }
  ],
  notes: [
    {
      id: 1,
      body: 'InstaWoof - Instagram for dogs',
      updatedAt: '2/1/16',
    },
    {
      id: 2,
      body: "Whiskr - it's like Tinder but for cats",
      updatedAt: '12/25/15',
    },
    {
      id: 3,
      body: 'Ka-Yak - travel site for yaks',
      updatedAt: '6/22/15',
    }

  ],
  selectedFolderId: 2,
  selectedNoteId: 2
};

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      folders: [],
      name: '',
      selectedFolder: 0
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleNewFolderName = this.handleNewFolderName.bind(this)
    this.handleFolderSelected = this.handleFolderSelected.bind(this)
  }

  handleNewFolderName(event){
    let newName = event.target.value
    this.setState({ name: newName})

  }

  handleFormSubmit(event){
    event.preventDefault()
    let newId = this.state.folders.length
    let newForm = {
      id: newId,
      name: this.state.name
    }
    let newForms =  [...this.state.folders, newForm]
    this.setState({
      folders: newForms,
      name: ''
    })
  }

  handleFolderSelected(id){
    let selectedFolder = id
    this.setState({ selectedFolder: selectedFolder})
  }

  render() {
    return(
      <div className="row">
        <div className="small-4 large-4 columns">
          <FolderForm
            name={this.state.name}
            handleNewFolderName={this.handleNewFolderName}
            handleFormSubmit={this.handleFormSubmit}
          />
          <FolderList
            folders={this.state.folders}
            selectedFolder={this.state.selectedFolder}
            handleFolderSelected={this.handleFolderSelected} />
        </div>
        <div className="small-4 large-4 columns">
          <NoteList />
        </div>
        <div className="small-4 large-4 columns">
          <Note />
        </div>
      </div>
    );
  }
};

export default App;

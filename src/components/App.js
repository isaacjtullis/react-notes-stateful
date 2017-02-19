import React from 'react';
import FolderForm from './FolderForm.js';
import NoteList from './NoteList.js';
import Note from './Note.js';

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

const App = props => {
  return (
    <div className="row">
      <div className="small-4 large-4 columns">
        <FolderForm />
      </div>
      <div className="small-4 large-4 columns">
        <NoteList />
      </div>
      <div className="small-4 large-4 columns">
        <Note />
      </div>
    </div>
  );
};

export default App;

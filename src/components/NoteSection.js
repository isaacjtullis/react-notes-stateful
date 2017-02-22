import React from 'react';

const NoteSection = (props) => {
  return(
    <div className="noteForm">
      <input
        type="text"
        value={props.noteName}
        onChange={props.handleNewNoteName}
      />
    </div>
  )
}

export default NoteSection;

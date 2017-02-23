import React from 'react';

const ChangeNote = (props) => {
  return(
    <div className="noteForm">
      <button type="button" onClick={props.handleButtonClick}>Update</button>
      <input
        type="text"
        placeholder={props.body}
        value={props.noteName}
        onChange={props.handleNoteBody}
      />
    </div>
  )
}

export default ChangeNote;

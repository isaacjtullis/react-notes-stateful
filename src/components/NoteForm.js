import React from 'react';

const NoteForm = props => {
  return (
    <form onSubmit={props.handleNoteFormSubmit}>
      <div className="small-12 controls columns">
        <div className="small-4 columns">
          <button><i className="fa fa-sticky-note-o" aria-hidden="true">New Note</i></button>
        </div>
        <div className="small-8 columns">
          <input
            type="text"
            placeholder="search"
            >
          </input>
        </div>
      </div>
    </form>
  )
};

export default NoteForm;


/*
return (
  <div className="small-12 controls columns">
    <div className="small-4 columns">
      <button><i className="fa fa-sticky-note-o" aria-hidden="true">New Note</i></button>
    </div>
    <div className="small-8 columns">
      <input type="text" placeholder="search"></input>
    </div>
    <div></div>
  </div>
)
*/

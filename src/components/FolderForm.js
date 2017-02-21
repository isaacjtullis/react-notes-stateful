import React from 'react';

const FolderForm = props => {
  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <div className="small-10 columns">
          <input
            type="text"
            placeholder="New Folder"
            value={props.name}
            onChange={props.handleNewFolderName}
          />
          <input type="submit" value="Add To List" />
        </div>
      </form>
    </div>
  );
};

export default FolderForm;

/*
<div className="small-12 columns">
  <div className="small-1 columns">
    <button type="fa fa-plus-circle">
      <i className="fa fa-plus-circle" aria-hidden="true"></i>
    </button>
  </div>
<div className="small-10 columns">
  <input type="text" placeholder="New Folder" />
</div>
</div>
*/

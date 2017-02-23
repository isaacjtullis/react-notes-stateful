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

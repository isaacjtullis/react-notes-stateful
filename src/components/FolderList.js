import React from 'react';
import Folder from './Folder.js';

const FolderList = props => {
  let folderName = props.folders.map((folder) => {
    let handleFolderSelected = () => props.handleFolderSelected(folder.id)
    let folderSelected = ""
    if (props.selectedFolder === folder.id) {
      folderSelected = "selected"
    }

    return(
      <Folder
        key={folder.id}
        name={folder.name}
        handleFolderSelected={handleFolderSelected}
        folderSelected={folderSelected}
      />
    )
  })
  return(
    <div className="folderlists">
      <ul>
        <div className="small-12 columns">
          <ul>
            {folderName}
          </ul>
          <div className="small-12 columns">
          </div>
        </div>
      </ul>
    </div>
  );
};

export default FolderList;

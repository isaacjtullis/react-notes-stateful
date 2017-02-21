import React from 'react';
import Folder from './Folder.js';

const FolderList = props => {
  let folderName = props.folders.map((folder) => {
    return(
      <Folder
        key={folder.id}
        name={folder.name}
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

import React from 'react'

const Folder = props => {
  return (
    <div>
      <li className={props.folderSelected} onClick={props.handleFolderSelected}>{props.name}</li>
    </div>
  );
};

export default Folder;

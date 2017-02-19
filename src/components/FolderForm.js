import React from 'react';

const FolderForm = props => {
  return (
    <div>
        <form
          onSubmit={
            event => {
              event.preventDefault();
              alert('Folder Created');
            }
          }
        >
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
      </form>
    </div>
  );
};

export default FolderForm;

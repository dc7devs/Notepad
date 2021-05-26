import React from "react";
import NoteContent from "./noteContentPreview";

import "./notes.scss";

const Notes = ({ notes, removeDataStorage }) => {
  function DeleteData(content) {
    removeDataStorage(content);
  }
  return (
    <div className="notion-container">
      {
        notes.map(noteContent => (
          <NoteContent
            noteContent={noteContent}
            DeleteData={DeleteData}
          />
        ))
      }
    </div>
  );
}

export default Notes;
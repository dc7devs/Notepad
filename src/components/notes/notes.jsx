import React from "react";
import NoteContent from "./noteContentPreview";

import "./notes.scss";

const Notes = ({ notes, RemoveData }) => {
  return (
    <div className="notion-container">
      {
        notes.map(noteContent => (
          <NoteContent
            noteContent={noteContent}
            RemoveData={RemoveData}
          />
        ))
      }
    </div>
  );
}

export default Notes;
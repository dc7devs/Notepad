import React from "react";
import NoteContentPreview from "./noteContentPreview";

import "./notes.scss";

const Notes = ({ notes, RemoveData }) => {
  return (
    <main className="notion-container toggerBackground">
      {
        notes.map(noteContent => (
          <NoteContentPreview
            key={noteContent.id}
            noteContent={noteContent}
            RemoveData={RemoveData}
          />
        ))
      }
    </main>
  );
}

export default Notes;
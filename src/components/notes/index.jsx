import React from "react";

import NoteContentPreviewBox from "./contentPreviewBox";
import "./style.scss";

const Notes = ({ notes, RemoveData, openModal }) => {
  return (
    <main className="notion-container toggerBackground">
      {
        notes.map(noteBox => (
          <NoteContentPreviewBox
            key={noteBox.id}
            noteBox={noteBox}
            RemoveData={RemoveData}
            openModal={openModal}
          />
        ))
      }
    </main>
  );
}
export default Notes;
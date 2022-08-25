import React from "react";

import NoteContentPreviewBox from "./contentPreviewBox";
import "./style.scss";

const Notes = ({ notes, RemoveData, openModal, setBackground }) => {
  return (
    <main className="notion-container backgroundContainBook">
      {
        notes.map(NoteBox => (
          <NoteContentPreviewBox
            key={NoteBox.id}
            NoteBox={NoteBox}
            RemoveData={RemoveData}
            openModal={openModal}
            setBackground={setBackground}
          />
        ))
      }
    </main>
  );
}
export default Notes;
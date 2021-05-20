import React from "react";
import NoteContent from "./noteContent";

import "./notes.scss";

const Notes = ({ notes }) => {
    return (
      <div className="notion-container">
        {
          notes.map(noteContent => (
          <NoteContent noteContent={noteContent} />
        ))
        }
      </div>
    );
}

export default Notes;
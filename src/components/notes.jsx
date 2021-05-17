import React from "react";
import Note from "./note";

import './notes.scss';

const Notes = ({ notes }) => {
    return (
      <>
       {notes.map( note => <Note />)}
      </>
    )
}

export default Notes;
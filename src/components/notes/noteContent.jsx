import React from "react";

const NoteContent = ({ noteContent }) => {
    return (
        <>
         <div className="note-box">
            <h2>
                {noteContent.title}
            </h2>
        </div>
        </>
    )
}

export default NoteContent;
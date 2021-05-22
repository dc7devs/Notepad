import React from "react";

import { HiTrash } from "react-icons/hi";

const NoteContent = ({ noteContent }) => {
    return (
        <>
            <div
                className="note-box"
            >
                <div
                    className="title"
                >
                    <p>
                        {noteContent.title}
                    </p>
                    <button
                        className="trash"
                    >
                        <HiTrash />
                    </button>
                </div>

                <p className="textPreview">
                    {noteContent.contentText}
                </p>

                <div className="lastEditionTimeBox">
                    <p className="lastEditionTime">21/05/2021 às 12:51</p>
                </div>
            </div>
        </>
    )
}

export default NoteContent;
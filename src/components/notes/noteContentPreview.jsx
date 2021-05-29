import React from "react";

import { HiTrash } from "react-icons/hi";

const NoteContent = ({ noteContent, RemoveData }) => {
    const remove = () => {
        RemoveData(noteContent)
    }
    return (
        < div
            className="note-box"
        >
            <div
                className="title"
            >
                <p>
                    {noteContent.inputTitle}
                </p>
                <button
                    className="trash"
                    onClick={remove}
                >
                    <HiTrash />
                </button>
            </div>

            <div className="textPreviewLastEditionTimeBox">
                <p className="textPreview">
                    {noteContent.inputText}
                </p>

                <div
                    className="lastEditionTimeBox"
                >
                    <p className="lastEditionTime">21/05/2021 às 12:51</p>
                </div>
            </div>
        </div >
    )
}

export default NoteContent;
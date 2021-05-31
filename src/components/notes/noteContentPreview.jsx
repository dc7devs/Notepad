import React from "react";

import { HiTrash } from "react-icons/hi";

const NoteContentPreview = ({ noteContent, RemoveData }) => {
    let container = document.querySelector("main.notion-container")
    if (noteContent) {
        container.classList.remove("toggerBackground")
    } 
    const remove = () => {
        RemoveData(noteContent)
        container.classList.add("toggerBackground")
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
                    <p className="lastEditionTime">{noteContent.lastEditionTime}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteContentPreview;
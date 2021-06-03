import React from "react"

import { HiTrash } from "react-icons/hi"
import { format } from "date-fns"

const NoteContentPreview = ({ noteContent, RemoveData, openPapyru}) => {
    function open(){
        openPapyru(noteContent)
    }
    let container = document.querySelector("main.notion-container")
    if (noteContent) {
        container.classList.remove("toggerBackground")
    } else {
        container.classList.add("toggerBackground")
    }
    const remove = () => {
        RemoveData(noteContent)
    }
    return (
        <div
            className="note-box"
        >
            <div
                className="titlePreview"
            >
                <p
                    onClick={open}
                >
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
                <code
                    className="textPreview"
                    onClick={open}
                >
                    {noteContent.inputText}
                </code>

                <div
                    className="lastEditionTimeBox"
                >
                    <p className="lastEditionTime">{format(new Date(noteContent.dateEdition), "dd/MM/yyyy 'ás' HH:mm")}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteContentPreview;
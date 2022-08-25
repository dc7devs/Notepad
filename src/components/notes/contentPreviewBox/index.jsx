import React from "react"

import { HiTrash } from "react-icons/hi"
import { format } from "date-fns"
import "./style.scss"

const NoteContentPreviewBox = ({ NoteBox, RemoveData, openModal }) => {
    function openBox() {
        openModal(NoteBox);
    }

    function removeBox() {
        RemoveData(NoteBox);
    }

    const ParserHTML = new DOMParser();
    const documentHTML = ParserHTML.parseFromString(NoteBox.contentText, "text/html");

    return (
        <div className="notePreviewBox">
            <div className="titlePreview">
                <p>
                    {
                        documentHTML.querySelector("body > h1, h2, h3")?.innerText || "🏷"
                    }
                </p>
                <button
                    className="trash" 
                    onClick={removeBox}
                >
                    <HiTrash />
                </button>
            </div>

            <div
                className="timeBoxPreview"
                onClick={openBox}
            >
                <code className="textPreview">
                    {
                        documentHTML.querySelector("body > p")?.innerText || "📝..."
                    }
                </code>

                <div className="lastChangeOfTimeBox">
                    <p className="time">
                        {
                            format(
                                new Date(NoteBox.dateEdition),
                                "dd/MM/yyyy 'ás' HH:mm:ss"
                            )
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NoteContentPreviewBox;
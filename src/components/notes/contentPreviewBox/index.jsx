import React from "react"

import { HiTrash } from "react-icons/hi"
import { format } from "date-fns"
import "./style.scss"

const NoteContentPreviewBox = ({ noteBox, RemoveData, openModal}) => {
    const open = function() {
        openModal(noteBox);
    }
    const container = document.querySelector("main.notion-container");
    if (noteBox) {
        container.classList.remove("toggerBackground");
    }
    
    if(!noteBox) {
        container.classList.add("toggerBackground");
    }
    const remove = () => {
        RemoveData(noteBox);
    }

    const parser = new DOMParser();
    console.log(noteBox.contentText);
    const htmlDoc = parser.parseFromString(noteBox.contentText, "text/html");

    return (
        <div className="notePreviewBox">
            <div className="titlePreview">
                <p>
                    {
                        htmlDoc.querySelector("body > h1") !== undefined || htmlDoc.querySelector("body > h1") !== null ?
                        htmlDoc.querySelector("body > h1").innerText : "🏷"
                    }
                </p>
                <button
                    className="trash"
                    onClick={remove}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                >                                                       
                    <HiTrash />
                </button>
            </div>

            <div
                className="timeBoxPreview"
                onClick={open}
            >
                <code className="textPreview">
                    {
                        htmlDoc.querySelector("body > p") !== undefined || htmlDoc.querySelector("body > p") !== null ?
                        htmlDoc.querySelector("body > p").innerText : "📝..."
                    }
                </code>

                <div className="lastChangeOfTimeBox">
                    <p className="time">{format(new Date(noteBox.dateEdition), "dd/MM/yyyy 'ás' HH:mm:ss")}</p>
                </div>
            </div>
        </div>
    );
}

export default NoteContentPreviewBox;
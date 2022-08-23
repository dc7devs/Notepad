import React, { useState, useEffect } from "react"

import { HiTrash } from "react-icons/hi"
import { format } from "date-fns"
import "./style.scss"

const NoteContentPreviewBox = ({ noteBox, RemoveData, openModal }) => {
    const container = document.querySelector("main.notion-container");
    const [containNoteBox, setContainNoteBox] = useState(container.hasChildNodes()); // false
    
    const PreviewBoxManager = new class {
        // abrir modal apartir da caixa de previsualização
        open() {
            openModal(noteBox);
        }
        remove() {
            RemoveData(noteBox);
            // if(!container.hasChildNodes()) {
            //     setContainNoteBox(true);
            // }
        }
    }

    // useEffect(() => {
    //     if(containNoteBox) {
    //         container.classList.remove("toggerBackground");
    //     }
    // }, [containNoteBox]);

    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(noteBox.contentText, "text/html");

    return (
        <div className="notePreviewBox">
            <div className="titlePreview">
                <p>
                    {
                        htmlDoc.querySelector("body > h1, h2, h3")?.innerText || "🏷"
                    }
                </p>
                <button
                    className="trash" 
                    onClick={PreviewBoxManager.remove}
                >                                                       
                    <HiTrash />
                </button>
            </div>

            <div
                className="timeBoxPreview"
                onClick={PreviewBoxManager.open}
            >
                <code className="textPreview">
                    {
                        htmlDoc.querySelector("body > p")?.innerText || "📝..."
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
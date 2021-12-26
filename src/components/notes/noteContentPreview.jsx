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

    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(noteContent.contentText, "text/html");


    // console.log(noteContent);
    console.log(htmlDoc.querySelector("body > h1"));

    return (
        <div
            className="note-box"
        >
            <div
                className="titlePreview"
            >
                <p>
                    {
                        htmlDoc.querySelector("body > h1") != undefined || htmlDoc.querySelector("body > h1") != null ?
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
                className="textPreviewLastEditionTimeBox"
                onClick={open}
            >
                <code
                    className="textPreview"
                >
                    {
                        htmlDoc.querySelector("body > p") != undefined || htmlDoc.querySelector("body > p") != null ?
                        htmlDoc.querySelector("body > p").innerText : "📝..."
                    }
                </code>

                <div
                    className="lastEditionTimeBox"
                >
                    <p className="lastEditionTime">{format(new Date(noteContent.dateEdition), "dd/MM/yyyy 'ás' HH:mm:ss")}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteContentPreview;
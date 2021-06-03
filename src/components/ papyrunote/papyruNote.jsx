import React, { useState } from "react"

import { RiCloseCircleLine } from "react-icons/ri"
import { FiEdit } from "react-icons/fi"
import { FaSave } from "react-icons/fa"

import "./papyruNote.scss"
import papyruimg from "../../assets/th.png"

const PapyruNote = ({ content, closePapyru, UpdateData }) => {
    function close () {
        closePapyru()
    }
    function toEdit() {
        let titleTag = document.querySelector(".title")
        let textTag = document.querySelector(".text")
        if(titleTag.hasAttribute("contentEditable") === false && titleTag.hasAttribute("contentEditable") === false) {
            titleTag.setAttribute("contentEditable","")
            textTag.setAttribute("contentEditable","")
        }
    }
    const [title, setTitle] = useState(content.inputTitle);
    const [text, setText] = useState(content.inputText);

    console.log(title)
    console.log(text)

    let id = content.id
    function update() {
        UpdateData({
            title,
            text,
            id
        })
    }
    function handleSave() {
        update()
        close()
    }

    return (
        <div className="papyruWidow">
            <button
                className="close"
                onClick={close}
            >
                <RiCloseCircleLine />
            </button>

            <img className="papyruImg" src={papyruimg} alt="bg"/>

            <div className="papyruContent">
                <div className="controls">
                    <button className="edit" onClick={toEdit}>
                        <FiEdit />
                    </button>
                    <button className="save" onClick={handleSave}>
                        <FaSave />
                    </button>
                </div>
                <h1 className="title" onInput={(e)=> setTitle(e.target.innerText)}>{content.inputTitle}</h1>

                <p className="text" onInput={(e) => setText(e.target.innerText)}>{content.inputText}</p>
                <small className="pageNumber">
                    {content.id}
                </small>
            </div>
        </div>
    )
}

export default PapyruNote;
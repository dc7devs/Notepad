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
        let title = document.querySelector(".title")
        let text = document.querySelector(".text")
        if(title.hasAttribute("contentEditable") === false && text.hasAttribute("contentEditable") === false) {
            title.setAttribute("contentEditable","")
            text.setAttribute("contentEditable","")
        }
    }
    const [title, setTitle] = useState(content.inputTitle);
    const [text, setText] = useState(content.inputText)
    let id = content.id
    function update() {
        UpdateData({
            title,
            text,
            id
        })
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
                    <button className="save" onClick={update}>
                        <FaSave />
                    </button>
                </div>
                <h1 className="title" onChange={e => setTitle(e.target.value)}>{content.inputTitle}</h1>

                <p className="text" onChange={e => setText(e.target.value)}>{content.inputText}</p>
                <small className="pageNumber">
                    {content.id}
                </small>
            </div>
        </div>
    )
}

export default PapyruNote;
import React from "react"

import "./papyruNote.scss"
import image from "../../assets/th.png"

const PapyruNote = () => {
    return (
        <div className="papyruWidow">

            <img className="papyruImg" src={image}/>

            <div className="papyruContent">
                <h1 className="title">Reactjs Lorem ipsum dolor sit amet consectetur</h1>

                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, est? Nostrum, reiciendis rem tempora magnam alias laborum cupiditate esse quidem cum id dolores porro sapiente sunt laboriosam a, ipsum dolore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, est? Nostrum, reiciendis rem tempora magnam
                </p>
            </div>
        </div>
    )
}

export default PapyruNote;
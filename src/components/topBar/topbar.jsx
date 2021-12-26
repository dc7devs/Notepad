import React, { useState, useRef } from "react"
import { Editor } from "@tinymce/tinymce-react"

import { GiSecretBook } from 'react-icons/gi';
import { IoMdVolumeOff, IoMdVolumeHigh } from 'react-icons/io'

import "./topbar.scss";

import iconAdventurer from "../../assets/Icon_Adventurer_Handbook.png"

const TopBar = ({ CreateData, isMuted, setIsMuted }) => {
  const editorRef = useRef(null);

  const [contentText, setContentText] = useState('');

  const handleSubmit = () => {
    // console.log(editorRef.current.getContent())

    if (contentText) {
      setContentText('')
      
    } else if (!contentText) {
      return;
    }

    CreateData({
      contentText
    })
  }

  return (
    <nav className="topBar">
      <button
					className="muted"
					onClick={() => setIsMuted(!isMuted)}
				>
					{
						isMuted ? <IoMdVolumeOff /> : <IoMdVolumeHigh  />
					}
			</button>
      <div className="edgesEfect" />
      <div className="contentTopBar">
        <h1 className="logoIcon">
          <GiSecretBook />
        </h1>
        <div className="boxSubmit">
          {/* <textarea
            onChange={e => setContentText(e.target.value)}
          ></textarea> */}
        {/* <Editor
              Key='gxp84k8sngseey44nqheo7rh8ih5ssi16cfk1x601a83rihc'
              onInit={(evt, editor) => editorRef.current = editor}
              initialValue={contentText}
              onChange={e => setContentText(e.target.value)}
              init={{
                height: 150,
                menubar: true,
                resize: false
              }}
          /> */}

          <button
            className="btn-addPlus"
            onClick={handleSubmit}
          >
            <p>NOVA NOTA</p>
            <img src={iconAdventurer} alt="Icon_Adventurer_Handbook.png" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default TopBar;
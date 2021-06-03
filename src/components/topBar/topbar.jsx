  import React, { useState } from "react";

import { FaPlusCircle, } from 'react-icons/fa';
import { GiSecretBook } from 'react-icons/gi';
import { IoMdVolumeOff, IoMdVolumeHigh } from "react-icons/io"

import "./topbar.scss";

const TopBar = ({ CreateData, isMuted, setIsMuted}) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    if (inputTitle || inputText) {
      setInputTitle('')
      setInputText('')
    } else if (!inputTitle && !inputText) {
      return;
    }

    CreateData({
      inputTitle,
      inputText
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
          <input
            className="titleArea"
            type="text"
            placeholder="Título"
            value={inputTitle}
            autoFocus
            onChange={e => setInputTitle(e.target.value)}
          />
          <textarea
            className="textArea"
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder="texto"
          />

          <button
            className="btn-addPlus"
            onClick={handleSubmit}
          >
            <FaPlusCircle />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default TopBar;
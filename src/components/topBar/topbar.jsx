import React, { useState } from "react";

import { FaPlusCircle, } from 'react-icons/fa';
import { GiSecretBook } from 'react-icons/gi';

import "./topbar.scss";

const TopBar = ({ UpdateData }) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    if (inputTitle || inputText) {
      setInputTitle('')
      setInputText('')
    }

    UpdateData({
      inputTitle,
      inputText
    })

  }

  return (
    <nav className="topBar">
      <div className="edgesEfect" />
      <h1 className="logoIcon">
        <GiSecretBook />
      </h1>
      <div className="text">
        <input
          type="text"
          placeholder="Título"
          value={inputTitle}
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


    </nav>
  )
}

export default TopBar;
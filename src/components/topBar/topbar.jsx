import React, { useState } from "react";

import { FaPlusCircle, } from 'react-icons/fa';
import { GiSecretBook } from 'react-icons/gi';

import "./topbar.scss";

const TopBar = ( {handleNotionAddition} ) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputText, setInputText] = useState('');

  const handleTitleEntryChange = (e) => {
    setInputTitle(e.target.value);

  }
  const handleTextEntryChange = (e) =>  {
    setInputText(e.target.value);
  }

  const handleNotionClick = () => {
    console.log(handleNotionAddition(inputTitle));
  }

  return (
    <nav className="topBar">
      <div className="edgesEfect"/>
      <h1 className="logoIcon"><GiSecretBook /></h1>
      <div className="text">
        <input
          onChange={handleTitleEntryChange}
          type="text"
          placeholder="Título"
          value={inputTitle}
        />
        <textarea
        onChange={handleTextEntryChange}
        value={inputText}
        className="textArea"
        placeholder="texto"
        type="text"/>
      </div>
      <button className="btn-addPlus" onClick={handleNotionClick}>
        <FaPlusCircle />
      </button>
    </nav>
  )
}

export default TopBar;
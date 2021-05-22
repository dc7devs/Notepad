import React, { useEffect, useState } from "react";

import { FaPlusCircle, } from 'react-icons/fa';
import { GiSecretBook } from 'react-icons/gi';

import "./topbar.scss";
// ----
const TopBar = ({ UpdateData }) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputText, setInputText] = useState('');
  
  useEffect(() => {
    
    const data = localStorage.getItem('NotePad@notes');
    const notions = data ? JSON.parse(data) : []
    
    
  }, [])

  const handleSubmit = () => {
    if(!inputTitle || inputTitle === '') return console.log('error title null')
    
    /* Chamando UpdateData Passando Uma Nova Note Que Será Adicionada. */
    UpdateData({
      inputText,
      inputTitle
    });
  }


  return (
    <nav className="topBar">
      <div className="edgesEfect"/>
      <h1 className="logoIcon"><GiSecretBook /></h1>
      <div className="text">
        <input
          onChange={e => setInputTitle(e.target.value)}
          type="text"
          placeholder="Título"
          value={inputTitle}
        />
        <textarea
        onChange={e => setInputText(e.target.value)}
        value={inputText}
        className="textArea"
        placeholder="texto"
        type="text"/>
      </div>

      <button
        className="btn-addPlus"
        onClick={handleSubmit}
        >
          <FaPlusCircle/>
      </button>
    </nav>
  )
}

export default TopBar;
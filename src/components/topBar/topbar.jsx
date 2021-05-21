import React from "react";

import { FaPlusCircle, } from 'react-icons/fa';
import { GiSecretBook } from 'react-icons/gi';

import "./topbar.scss";

const TopBar = () => {
  return (
    <nav className="topBar">
      <div className="edgesEfect"/>
      <h1 className="logoIcon"><GiSecretBook /></h1>
      <div className="text">
        <input type="text" placeholder="Título"/>
        <textarea className="textArea" placeholder="text"type="text"/>
      </div>
        <button className="btn-addPlus"><FaPlusCircle /></button>
    </nav>
  )
}

export default TopBar;
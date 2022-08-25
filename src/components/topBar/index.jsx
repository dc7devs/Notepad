import React from "react"

import { GiSecretBook } from 'react-icons/gi';
import { IoMdVolumeOff, IoMdVolumeHigh } from 'react-icons/io'
import "./style.scss";

import iconAdventurer from "../../assets/Icon_Adventurer_Handbook.png"

const TopBar = ({ isSoundMuted, setIsSoundMuted, openModal }) => {
  function open(){
    openModal('');
  }

  return (
    <nav className="topBar">
      <button
					className="muted"
					onClick={() => setIsSoundMuted(!isSoundMuted)}
				>
					{
						isSoundMuted ? <IoMdVolumeOff /> : <IoMdVolumeHigh  />
					}
			</button>
      <div className="edgesEfect" />
      <div className="contentTopBar">
        <h1 className="logoIcon">
          <GiSecretBook />
        </h1>
        <div className="boxSubmit">

          <button
            className="btn-addPlus"
            onClick={open}
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
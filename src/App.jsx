import React, { useState } from "react";

import TopBar from "./components/topBar/topbar";
import Notes from "./components/notes/notes";

import "./App.scss";

const App = () => {
  let [notes, setNotes] = useState([
    {
      id: 1,
      title: "Aprender HTML",
      contentText: "LoremEsto aprendendo React a 3dias, ja sabia um poucoLorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quas earum provident atque est dicta. Excepturi, quibusdam minus? Aliquid corrupti saepe ullam ipsam officia eaque perferendis sequi dolore amet similique? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quas earum provident atque est dicta. Excepturi, quibusdam minus? Aliquid corrupti saepe ullam ipsam officia eaque perferendis sequi dolore amet similique?"
    },
    {
      id: 2,
      title: "Aprender CSS",
      contentText: "LoremEsto aprendendo React a 3dias, ja sabia um poucoLorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quas earum provident atque est dicta. Excepturi, quibusdam minus? Aliquid corrupti saepe ullam ipsam officia eaque perferendis sequi dolore amet similique? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quas earum provident atque est dicta. Excepturi, quibusdam minus? Aliquid corrupti saepe ullam ipsam officia eaque perferendis sequi dolore amet similique?"
    },
    {
      id: 3,
      title: "Aprender javaScript",
      contentText: "LoremEsto aprendendo React a 3dias, ja sabia um poucoLorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quas earum provident atque est dicta. Excepturi, quibusdam minus? Aliquid corrupti saepe ullam ipsam officia eaque perferendis sequi dolore amet similique? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quas earum provident atque est dicta. Excepturi, quibusdam minus? Aliquid corrupti saepe ullam ipsam officia eaque perferendis sequi dolore amet similique?"
    },
    {
      title: "Aprender React",
      
    }
    
  ]);
  const handleNotionAddition = (notionTitle) => {
    const newNote = [...notes, {
      title: notionTitle,
      contentText: "LoremEsto aprendendo React a 3dias, ja sabia um poucoLorem ipsum",
      id: Math.random(10),
    }];

    setNotes(newNote);
  }
	return (
		<>
			<div className="container">
        <TopBar />
        <Notes notes={notes}/>
      </div>
		</>
	)
}

export default App;
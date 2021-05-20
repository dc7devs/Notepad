import React, { useState } from "react";

import TopBar from "./components/topBar/topbar";
import Notes from "./components/notes/notes";

import "./App.scss";

const App = () => {
  let [notes, setNotes] = useState([
    {
      id: 1,
      title: "Aprender HTML",
      completed: true,
    },
    {
      id: 2,
      title: "Aprender CSS",
      completed: true,
    },
    {
      id: 3,
      title: "Aprender javaScript",
      completed: true,
    },
    {
      id: 4,
      title: "Aprender React",
      completed: false
    }
    
  ]);
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
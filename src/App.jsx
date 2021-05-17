import React, { useState } from "react";

import "./App.scss";
import Notes from "./components/notes";


const App = () => {
  let [notes, setNotes] = useState([
    {
      id: 1,
      title: "Aprender HTML",
      completed: true
    },
    {
      id: 2,
      title: "Aprender CSS",
      completed: true,
    },
    {
      id: 3,
      title: "Aprender javaScript",
      completed: true
    },
    {
      id: 4,
      title: "Aprender React",
      completed: false
    }
  ])
	return (
		<div>
			<div className="container">
        <Notes notes={notes}/>
      </div>
		</div>
	)
}

export default App;
import React, { useState } from "react";

import TopBar from "./components/topBar/topbar";
import Notes from "./components/notes/notes";

import "./App.scss";

const App = () => {

  let [notes, setNotes] = useState([]);

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
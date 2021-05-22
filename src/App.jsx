import React, { useEffect, useState } from "react";

import TopBar from "./components/topBar/topbar";
import Notes from "./components/notes/notes";

import "./App.scss";

const App = () => {

	const [notes, setNotes] = useState([]);

	function UpdateData(note) {
		const oldData = localStorage.getItem('NodePad@notes');

		const data = oldData ? JSON.parse(oldData) : [];

		if(note) data.unshift(note);

		localStorage.setItem('NotePad@notes', JSON.stringify(data));

		setNotes(data);
	}
	useEffect(() => {
		UpdateData();
	}, []);

	return (
		<>
			<div className="container">
				<TopBar 
					UpdateData={UpdateData}
				/>
				<Notes
					notes={notes}
				/>
			</div>
		</>
	)
}

export default App;

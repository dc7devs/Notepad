import React, { useEffect, useState } from "react";

import TopBar from "./components/topBar/topbar";
import Notes from "./components/notes/notes";

import "./App.scss";

const App = () => {

	const [notes, setNotes] = useState();

	function UpdateData(note) {
		
		const data = localStorage.getItem('NodePad@notes');

		const oldData = data ? JSON.parse(data) : [];

		const newData = [
			note,
			...oldData
		]

		localStorage.setItem('NotePad@notes', JSON.stringify(newData));

		// if(note) setNotes(newData);
		setNotes(newData);

	}
	useEffect(() => {
		const data = localStorage.getItem('NodePad@notes');
		const oldData = data ? JSON.parse(data) : [];
		
		setNotes(oldData);
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

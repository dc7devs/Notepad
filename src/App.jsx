import React, { useEffect, useState } from "react";

import TopBar from "./components/topBar/topbar";
import Notes from "./components/notes/notes";

import "./App.scss";

const App = () => {

	const [notes, setNotes] = useState([]);

	function UpdateData(note) {

		const data = localStorage.getItem('NotePad@notes');

		const oldData = data ? JSON.parse(data) : [];

		const newData = [
			note,
			...oldData
		]

		localStorage.setItem('NotePad@notes', JSON.stringify(newData));

		setNotes(newData);

	}
	useEffect(() => {
		const data = localStorage.getItem('NotePad@notes');
		const notes = data ? JSON.parse(data) : [];

		setNotes(notes);
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

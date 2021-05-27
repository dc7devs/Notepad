import React, { useEffect, useState } from "react";

import TopBar from "./components/topBar/topbar";
import Notes from "./components/notes/notes";

import "./App.scss";

const App = () => {
	// notes, matriz usada para inserção das notas(JSON)
	const [notes, setNotes] = useState([]);
	const lengthNotes = notes.length ? notes.length : 0;
	const [idBox, setIdBox] = useState(lengthNotes);

	function UpdateData(note) {

		const data = localStorage.getItem('NotePad@notes');

		const oldData = data ? JSON.parse(data) : [];

		// note recebe id
		note.id = setIdBox(idBox + 1);

		const newData = [
			note,
			...oldData
		]

		localStorage.setItem('NotePad@notes', JSON.stringify(newData));

		setNotes(newData);
		console.log(setIdBox(idBox + 1));
	}
	function removeDataStorage(content) {
		let storedContent = JSON.parse(localStorage.getItem("NotePad@notes"));

		// storedContent.findIndex(data => data.id === content.id);

		// var indexToRemove = storedContent.findIndex(data => data.id === content.id);

		// localStorage.setItem('NotePad@notes', JSON.stringify(storedContent.slice(indexToRemove, 1)));

		console.log(storedContent)
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
					removeDataStorage={removeDataStorage}
				/>
			</div>
		</>
	)
}

export default App;

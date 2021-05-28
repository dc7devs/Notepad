import React, { useEffect, useState } from "react";

import TopBar from "./components/topBar/topbar";
import Notes from "./components/notes/notes";

import "./App.scss";

const App = () => {
	// notes, matriz usada para inserção das notas(JSON)
	const [notes, setNotes] = useState([]);
	// const lengthNotes = notes.length ? notes.length : 0;
	// const [idBox, setIdBox] = useState(lengthNotes);

	function UpdateData(note) {

		const data = localStorage.getItem('NotePad@notes');

		const oldData = data ? JSON.parse(data) : [];

		// note recebe id
		note.id = notes.length

		const newData = [
			...oldData,
			note
		]

		localStorage.setItem('NotePad@notes', JSON.stringify(newData));

		setNotes(newData);

	}
	function removeDataStorage(content) {
		let storedContent = JSON.parse(localStorage.getItem("NotePad@notes"));

		storedContent.slice(content.id, 1)

		console.log(storedContent)
		localStorage.setItem('NotePad@notes', JSON.stringify(storedContent));
		

		// let indexToRemove = storedContent.findIndex(data => data.id === content.id)

		// localStorage.setItem('NotePad@notes', JSON.stringify(storedContent.slice(indexToRemove, 1)));

		// console.log(indexToRemove)
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

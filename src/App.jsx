import React, { useEffect, useState } from "react";

import TopBar from "./components/topBar/topbar";
import Notes from "./components/notes/notes";

import "./App.scss";

const App = () => {
	// notes, matriz usada para inserção das notas(JSON)
	const [notes, setNotes] = useState([]);
	const [indexNote, setIndexNote] = useState(notes.length);

	function CreateData(note) {
		const data = localStorage.getItem('NotePad@notes');
		const oldData = data ? JSON.parse(data) : [];

		// note recebe id
		note.id = indexNote
		setIndexNote(indexNote +1)

		const newData = [
			...oldData,
			note,
		]

		localStorage.setItem('NotePad@notes', JSON.stringify(newData));

		setNotes(newData);

		// if(oldData.length === 1 && note.id > 1) {
		// 	setIndexNote(notes.length);
		// 	console.log(indexNote);
		// }
	}
	function RemoveData(content) {
		let storedContent = JSON.parse(localStorage.getItem("NotePad@notes"));
		storedContent.splice(content.id, 1)
		setNotes(storedContent);
		
		// Atualização dos IDs restantes, apos a remoção
		let idOperation = storedContent.slice(content.id, storedContent.length +1)
		for (let i in idOperation) {
			idOperation[i].id = idOperation[i].id -1;
		}

		localStorage.setItem('NotePad@notes', JSON.stringify(storedContent));
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
					CreateData={CreateData}
				/>
				<Notes
					notes={notes}
					RemoveData={RemoveData}
				/>
			</div>
		</>
	)
}

export default App;

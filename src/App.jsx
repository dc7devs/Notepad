import React, { useEffect, useState } from "react"

import TopBar from "./components/topBar/topbar"
import Notes from "./components/notes/notes"
import Footer from "./components/footer/footer"

import "./App.scss"
import sample from "./assets/video.mp4"

const App = () => {
	// notes, matriz usada para inserção das notas(JSON)
	const [notes, setNotes] = useState([]);

	// Data e Hora que a nota foi criado
	let currentTime = new  Date()
	let currentTimeHours = currentTime.getHours()
	let currentTimeMinutes = currentTime.getMinutes()
	let currentTimeDate = currentTime.getDate()
	let currentTimeMonth = currentTime.getMonth() +1
	if (currentTimeMonth < 10) {
		currentTimeMonth = `0${currentTimeMonth}`
	}
	let currentTimeYear = currentTime.getFullYear()
	let timeFormatted = `${currentTimeDate}/${currentTimeMonth}/${currentTimeYear} ás ${currentTimeHours}:${currentTimeMinutes}`;
	const [time, setTime] = useState(timeFormatted);

	function CreateData(note) {
		const data = localStorage.getItem('NotePad@notes');
		const oldData = data ? JSON.parse(data) : [];

		// note recebe id
		if(notes.length > 0)
			note.id = (notes[notes.length -1].id +1)
		else
			note.id = 0
		
		setTime(timeFormatted)
		note.lastEditionTime = time

		const newData = [
			...oldData,
			note,
		]

		localStorage.setItem('NotePad@notes', JSON.stringify(newData));

		setNotes(newData);
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
				<Footer />
				<video className='myVideo' autoPlay="true" muted loop>
					<source src={sample} type='video/mp4'/>
				</video>
			</div>
		</>
	)
}

export default App;

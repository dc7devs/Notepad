import React, { useEffect, useState } from "react"

import TopBar from "./components/topBar/topbar"
import Notes from "./components/notes/notes"
import Footer from "./components/footer/footer"
import PapyruNote from "./components/ papyrunote/papyruNote"
import NoteController from "./controllers/notes.controllers"

import "./App.scss"
import sample from "./assets/video.mp4"

const noteController = new NoteController()

const App = () => {
	// notes, matriz usada para inserção das notas(JSON)
	const [notes, setNotes] = useState([]);
	const [isMuted, setIsMuted] = useState(true)
	const [isUpNotes, setIsUpNotes] = useState(false)
	const [isPapyru, setIsPapyru] = useState(false)
	const [content, setContent] = useState([])

	
	function openPapyru(content) {
		setIsPapyru(true)
		setContent(content)
	}
	function closePapyru() {
		setIsPapyru(false)
	}

	useEffect(() => {
		setNotes(noteController.find())

		setIsUpNotes(false)
	}, [isUpNotes]);

	function handleCreateNote(newNote) {
		noteController.create(newNote)

		setIsUpNotes(true)
	}

	function handleRemoveNote(removeNote) {
		noteController.remove(removeNote)

		setIsUpNotes(true)
	}

	function handleUpdateNote(updateNote) {
		noteController.update(updateNote)

		setIsUpNotes(true)
	}

	return (
		<>
			<div className="container">
				<TopBar
					isMuted={isMuted}
					setIsMuted={setIsMuted}
					openPapyru={openPapyru}
				/>
				<Notes
					notes={notes}
					RemoveData={handleRemoveNote}
					openPapyru={openPapyru}
				/>
				<Footer />
				{
					isPapyru ?
						<PapyruNote
							CreateData={handleCreateNote}
							content={content}
							closePapyru={closePapyru}
							UpdateData={handleUpdateNote}
						/>
					: isPapyru
				}
				<video
					className='myVideo'
					autoPlay
					muted={isMuted}
					loop
				>
					<source
						src={sample}
						type="video/mp4"
					/>
				</video>
			</div>
		</>
	)
}

export default App;
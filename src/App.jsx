import React, { useEffect, useState } from "react"

import TopBar from "./components/topBar/topbar"
import Notes from "./components/notes/notes"
import Footer from "./components/footer/footer"
import NoteController from "./controlers/notes.controllers"

import "./App.scss"
import sample from "./assets/video.mp4"
import { IoMdVolumeOff, IoMdVolumeHigh } from "react-icons/io"

const noteController = new NoteController()

const App = () => {
	// notes, matriz usada para inserção das notas(JSON)
	const [notes, setNotes] = useState([]);
	const [isMuted, setIsMuted] = useState(true)
	const [isUpNotes, setIsUpNotes] = useState(false)

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
	
	return (
		<>
			<div className="container">
				<button
					className="muted"
					onClick={() => setIsMuted(!isMuted)}
				>
					{
						isMuted ? <IoMdVolumeOff /> : <IoMdVolumeHigh  />
					}
				</button>
				<TopBar
					CreateData={handleCreateNote}
				/>
				<Notes
					notes={notes}
					RemoveData={handleRemoveNote}
				/>
				<Footer />
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

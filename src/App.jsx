import React, { useEffect, useState } from "react"

import { IoMdVolumeOff, IoMdVolumeHigh } from "react-icons/io"
import TopBar from "./components/topBar/topbar"
import Notes from "./components/notes/notes"
import Footer from "./components/footer/footer"
import NotesController from "./controllers/notes.controller"

import "./App.scss"
import sample from "./assets/video.mp4"

const notesController = new NotesController()

const App = () => {
	// notes, matriz usada para inserção das notas(JSON)

	const [notes, setNotes] = useState([])
	const [isUpNotes, setIsUpNotes] = useState(false)
	const [isMuted, setIsMuted] = useState(true)

	useEffect(() => {
		setNotes(notesController.find())
		
		setIsUpNotes(false)
	}, [isUpNotes])

	function handleCreateNote(newNote) {
		notesController.create(newNote)
		
		setIsUpNotes(true)
	}

	function handleRemoveNote(removeNote) {
		notesController.remove(removeNote)

		setIsUpNotes(true)
	}
	
	return (
		<>
			<button 
				className="mute"
				onClick={() => setIsMuted(!isMuted)}
			>
				{isMuted? 
					<IoMdVolumeOff/>
					:
					<IoMdVolumeHigh/>
				}
			</button>
			<div className="container">
				<TopBar CreateData={handleCreateNote} />
				<Notes notes={notes} RemoveData={handleRemoveNote} />
				<Footer />
				<video className='myVideo' autoPlay muted={isMuted} loop>
					<source src={sample} type='video/mp4'/>
				</video>
			</div>
		</>
	)
}

export default App;

import React, { useEffect, useState } from "react"

import { FaVolumeMute, FaVolumeUp } from "react-icons/fa"
import TopBar from "./components/topBar/topbar"
import Notes from "./components/notes/notes"
import Footer from "./components/footer/footer"
import PapyruNote from "./components/ papyrunote/papyruNote"
import NoteController from "./controlers/notes.controllers"

import "./App.scss"
import sample from "./assets/video.mp4"
import { IoMdVolumeOff, IoMdVolumeHigh } from "react-icons/io"

const noteController = new NoteController()

const notesController = new NotesController()

const App = () => {
	// notes, matriz usada para inserção das notas(JSON)

	const [notes, setNotes] = useState([])
	const [isUpNotes, setIsUpNotes] = useState(false)
	const [isMute, setIsMute] = useState(true)

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
				onClick={() => setIsMute(!isMute)}
			>
				{isMute? 
					<FaVolumeMute/>
					:
					<FaVolumeUp/>
				}
			</button>
			<div className="container">
				<TopBar CreateData={handleCreateNote} />
				<Notes notes={notes} RemoveData={handleRemoveNote} />
				<Footer />
				<video className='myVideo' autoPlay muted={isMute} loop>
					<source src={sample} type='video/mp4'/>
				</video>
			</div>
		</>
	)
}

export default App;

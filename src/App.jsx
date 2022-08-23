import React, { useEffect, useState } from "react";
// import {  }

import TopBar from "./components/topBar";
import Notes from "./components/notes";
import Footer from "./components/footer";
import ModalNote from "./components/modal";

import NoteController from "./controllers/notes.controllers";

import "./App.scss";
const sample = require("./assets/video.mp4");

const noteController = new NoteController();

const App = () => {
	// notes, matriz usada para inserção das notas(JSON)
	const [notes, setNotes] = useState([]); // [{}..]
	const [contentToModal, setContentToModal] = useState([]) // {..}

	const [isSoundMuted, setIsSoundMuted] = useState(true)
	const [isUpNotes, setIsUpNotes] = useState(false)
	const [isOpenModal, setIsOpenModal] = useState(false)

	// Abrir Modal
	function openModal(contentToModal) {
		setIsOpenModal(true);
		setContentToModal(contentToModal);
	}
	// Fechar Modal
	function closeModal() {
		setIsOpenModal(false);
	}

	// Tranzendo novos dados do banco de dados(localhost)
	useEffect(() => {
		setNotes(noteController.find());

		setIsUpNotes(false);
	}, [isUpNotes]);

	// Criar Anotação
	function handleCreateNote(newNote) {
		noteController.create(newNote);

		setIsUpNotes(true);
	}

	// Remover anotação
	function handleRemoveNote(removeNote) {
		noteController.remove(removeNote);

		setIsUpNotes(true);
	}

	// Atualizar anotação
	function handleUpdateNote(updateNote) {
		noteController.update(updateNote);

		setIsUpNotes(true);
	}

	return (
		<>
			<div className="container">
				<TopBar
					isSoundMuted={isSoundMuted}
					setIsSoundMuted={setIsSoundMuted}
					openModal={openModal}
				/>
				<Notes
					notes={notes}
					RemoveData={handleRemoveNote}
					openModal={openModal}
				/>
				{
					isOpenModal ?
						<ModalNote
							createData={handleCreateNote}
							contentToModal={contentToModal}
							closeModal={closeModal}
							updateData={handleUpdateNote}
						/>
					: isOpenModal
				}
				<Footer />
				<video
					className='myVideo'
					autoPlay
					muted={isSoundMuted}
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
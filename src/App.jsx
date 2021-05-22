import React, { useEffect, useState } from "react";

import TopBar from "./components/topBar/topbar";
import Notes from "./components/notes/notes";

import "./App.scss";

const App = () => {

	/* Sempre use const no useState */
  	const [notes, setNotes] = useState([]);

	/**
	 * 
	 * @param {Note | undefined} note note é opcional, se for passado ele adiciona `note` à lista e atualiza a localStorage e o state, 
	 * se não ele somente carrega o que já existe na localStorage e atualiza o state.
	 */
	function UpdateData(note) {
		
		const oldData = localStorage.getItem('NotePad@notes');

		const data = oldData ? JSON.parse(oldData) : [];

		if(note) data.unshift(note);

		// Salva os dados na localStorage
		localStorage.setItem('NotePad@notes', JSON.stringify(data));
		
		// Salva os dados no state
		setNotes(data);
	}

	useEffect(() => {
		// Isso carrega o que ja tem salvo na localStorage quando o componente carrega pela primeira vez
		// Antes só mostrava dps de adicionar
		UpdateData();
	}, []); /* 
		por padrão, o useEffect é chamado toda vez que ocorre uma atualização em um dos states do componente,
		o useEffect recebe um segundo parametro que é um array com states do useState,
		ele só é chamado na primeira renderização, ou, quando os elementos do array atualizam,
		passar um array vazio significa que você só quer que o useEffect seja chamado na primeira renderização,
		e depois nunca mais durante as atualizações.
	*/


	return (
		<>
			<div className="container">
				{/* Passando para TopBar A função Responsável Por Atualizar As Notes */}
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
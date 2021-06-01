export default class NoteController {
    find() {
        const data = localStorage.getItem('NotePad@notes');
		return data ? JSON.parse(data) : [];
    }
    create(newNote) {
        const oldData = this.find()

        if(oldData !== undefined && oldData.length > 0)
            newNote.id = (oldData[oldData.length -1].id +1)
        else
            newNote.id = 0
        
        newNote.dateEdition = new Date()
        // updates localStorage
        const newData = [
            ...oldData ? oldData : [],
            newNote
        ]
        localStorage.setItem('NotePad@notes', JSON.stringify(newData))

        return newData
    }
    remove(removeNote) {
        const notes = this.find()
		notes.splice(removeNote.id, 1)

		// Atualização dos IDs restantes, apos a remoção
		let idOperation = notes.slice(removeNote.id, notes.length +1)
		for (let i in idOperation) {
			idOperation[i].id = idOperation[i].id -1;
		}

		localStorage.setItem('NotePad@notes', JSON.stringify(notes));

        return notes
    }
}
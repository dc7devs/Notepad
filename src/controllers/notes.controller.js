export default new class NoteController {
    find() {
        const data = localStorage.getItem('NotePad@notes')
        return data ? JSON.parse(data) : []
    }
    create(newNote) {
        const oldData = this.find()
        //newNote config
		if(oldData !== undefined && oldData.length > 0)
            newNote.id = (oldData[oldData.length -1].id +1)
        else
            newNote.id = 0
        newNote.dateEdition = new Date()
        //updates localStorage
        const newData = [
			...oldData? oldData : [],
			newNote,
		]
        localStorage.setItem('NotePad@notes', JSON.stringify(newData))
        
        return newData
    }
    remove(note) {
        const notes = this.find()
        //remove note with note.id
        notes.splice(notes.indexOf(note.id), 1)
        localStorage.setItem('NotePad@notes', JSON.stringify(notes))
        
        return notes
    }
}
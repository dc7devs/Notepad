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
        notes.splice(notes.findIndex(note => note.id === removeNote.id), 1)

		localStorage.setItem('NotePad@notes', JSON.stringify(notes));

        return notes
    }
    update(updateNote) {
        const notes = this.find()
        const idNote = updateNote.id

        // console.log(updateNote)
        
        for(let i in notes) {
            if(notes[i].id === idNote) {
                notes[i].contentText = updateNote.contentText
            }
        }
        // console.log(notes)
        localStorage.setItem('NotePad@notes', JSON.stringify(notes));
        return notes;
    }
}
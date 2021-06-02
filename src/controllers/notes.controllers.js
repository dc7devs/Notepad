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
        const oldData = this.find()
        const idNote = updateNote.id
        
        for(let i in oldData) {
            if(oldData[i].id === idNote) {
                oldData[i].inputTitle = updateNote.inputTitle
                oldData[i].inputText = updateNote.inputText
                
                localStorage.setItem('NotePad@notes', JSON.stringify(oldData));
                return oldData;
            }
        }
    }
}
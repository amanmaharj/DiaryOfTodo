const fs = require('fs')
const chalk = require('chalk')



const addNote = (title, body) => {
    const note = loadNote()
   
    const duplicateNote = note.filter((notes) => {
        return notes.title === title
    })
    if (duplicateNote.length === 0) {
        note.push({
            title: title,
            body: body
        })
        saveNote(note)
        console.log('new note added')
    } else {
        console.log('note title taken')
    }

}
const removeNote = function (title) {
    const note = loadNote()
    const noteTokeep = note.filter((notes) => {
        return notes.title !== title

    })
    if (note.length > noteTokeep) {

        console.log(chalk.green.inverse('note removed'))
        saveNote(noteTokeep)
    } else {
        console.log(chalk.red.inverse('title not correct!!'))
    }

    n
}

const listNote = () => {
    const list = loadNote()
    console.log(chalk.green.inverse('your list is: '))
    list.forEach((notes) => {
        console.log(notes.title)
    })


}

const readNote = (title) => {
    const notes = loadNote()


    const read = notes.filter((note) => {
        return note.title === title
    })
    if (read.length !== 0) {
        read.forEach((note) => {
            console.log('Your fruit is: ' + chalk.green.inverse(note.title))
            console.log('Your message: ' + chalk.yellow.inverse(note.body))

        })

    } else {
        console.log(chalk.red.inverse('no such title sorry!!!!'))
    }



}











const saveNote = (note) => {
    const jsonData = JSON.stringify(note)
    fs.writeFileSync('note.json', jsonData)

}
const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('note.json')
        const dataJson = dataBuffer.toString()

        return JSON.parse(dataJson)

    } catch (e) {
        return []
    }

}









module.exports = {

    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}
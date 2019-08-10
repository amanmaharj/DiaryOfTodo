const chalk = require('chalk');
const yargs = require('yargs');

const note = require('./note.js')


//create read command
yargs.command({
    command: 'read',
    describe: 'reading new note',
    title: {
        describe: 'give the title to read',
        type: 'string',
        demandOption: true
    },
    handler(argv) {
       note.readNote(argv.title)
    }
})


//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder:{
        title:{
            describe: 'put the title',
            demandOption: true,
            type: 'string'

        }


    },
    
    handler(argv) {
        note.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'listing the note',
   
    handler(){
        note.listNote() 
    }
})
//create add command
yargs.command({
    command: 'add',
    describe: 'adding the note',
    builder: {
        title: {
            describe: 'put the title',
            demandOption: true,
            type: 'string'

        },
        body: {
            describe: 'put the body',
            demandOption: true,
            type: 'string'

        }

    },
    handler(argv) {
        note.addNote(argv.title, argv.body)
    }
})
yargs.parse()


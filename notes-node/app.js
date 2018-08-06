console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of Note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of the Note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new Note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all Notes')
    .command('read', 'Read a Note', {
        title: titleOptions
    })
    .command('remove', 'Remove a Note', {
        title: titleOptions
    })
    .help()
    .argv;

let command = argv._[0];
console.log('Command: ', command);
console.log('Yargs: ', argv);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('A note was successfully created.');
        notes.logNote(note);
    } else {
        console.log('Note was not created');
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();

    console.log(`Printing ${allNotes.length} note(s).`);

    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    let note = notes.getNote(argv.title);

    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('note not found');
    }
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);

    let message = noteRemoved ? 'Note has been removed' : 'Note has not been removed';
    console.log(message);
} else {
    console.log('Command not recognised');
}

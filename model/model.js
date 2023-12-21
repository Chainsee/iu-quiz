const mongoose = require('mongoose');
const fragen = new mongoose.Schema({
    kategorie: {
        required: true,
        type: String,
    },
    frage: {
        required: true,
        type: String,
    },
    korrekteAntwort: {
        required: true,
        type: String,
    },
    antworten: {
        required: true,
        type: {
            antwort1: String,
            antwort2: String,
            antwort3: String,
            antwort4: String,
        }
    }
})

module.exports = mongoose.model('Data', fragen)
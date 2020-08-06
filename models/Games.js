const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gamesSchema = new Schema({
    title: String,
    release_date: Date,
    release_date_string: Date,
    platform: {
        type: Number,
        min: 0,
        max: 5,
        default: []
    },
    date_added: {
        type: Date,
        default: Date.now
    }

});

const Games = mongoose.model('Games', gamesSchema)

module.exports = Games;
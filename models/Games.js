const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gamesSchema = new Schema({
    title: String,
    release_date: Date,
    release_date_string: Date,
    platform: {
        type: [Number],
        index: true
    },
    date_added: {
        type: Date,
        default: Date.now
    }

});

const Game = mongoose.model('Game', gamesSchema, 'games')

module.exports = Game;

// platform key
/*
0 3rd-Party
1 X1
2 PS4
3 Xbox Series
4 PS5
5 PC
*/
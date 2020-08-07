const path = require('path');
const db = require('../models');

module.exports = app => {

    app.get('/api/games', (req, res) => {
        db.Game.find({}).then(gameTitle => {
            console.log(gameTitle)
            res.json(gameTitle);
        }).catch(err => {
            res.json(err);
        })
    });

    app.post('/api/games', ({ body }, res) => {
        db.Game.create({ body })
            .then(
                (newTitle) => {
                    console.log(newTitle);
                    res.json(newTitle);
                }
            )
            .catch(
                err => {
                    res.status(400).json(err);
                })
    });
}
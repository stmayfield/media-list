const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const app = express();
const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mediaDB', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
});

require('./routes/html-routes.js')(app);


app.get('/games', (req, res) => {
    db.Game.find({}).then(gameTitle => {
        console.log(gameTitle)
        res.json(gameTitle);
    }).catch(err => {
        res.json(err);
    })
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
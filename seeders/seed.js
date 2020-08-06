const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mediaDB', {
    useNewUrlParser: true,
    useFindAndModify: false
})

const dbSeed = [
    {
        title: 'Halo: Infinite',
        release_date_string: '11/09/2020',
        platform: 3,
        date_added: new Date(Date.now())
    },
    {
        title: 'Spider-Man: Miles Morales',
        release_date_string: '12/15/2020',
        platform: 4,
        date_added: new Date(Date.now())
    },
    {
        title: 'Assassin\'s Creed: Valhalla',
        release_date_string: '11/19/2020',
        platform: [1, 2, 3, 4, 5],
        date_added: new Date(Date.now())
    },
    {
        title: 'Cyberpunk 2077',
        release_date_string: '11/19/2020',
        platform: [1, 2, 3, 4, 5],
        date_added: new Date(Date.now())
    }
];

db.Game.deleteMany({})
    .then(() => db.Game.collection.insertMany(dbSeed))
    .then(data => {
        console.log(`${data.result.n} records inserted!`);
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
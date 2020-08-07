const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3130;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mediaDB', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
});

require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
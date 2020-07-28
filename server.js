const express = require('express');
const db = require('./models');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('/public/'));

require('./routes/html-routes.js')(app);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
})
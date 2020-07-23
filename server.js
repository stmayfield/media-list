const express = require('express');
const path = require('path');
const db = require('./models');
const app = express();
const PORT = process.env.PORT || 8080;
//  Routes
const routesHTML = require('./routes/html-routes.js');
const routesAPI = require('./routes/api-routes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

routesHTML(app);
routesAPI(app);

db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}/`);
    })
});
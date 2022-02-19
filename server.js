const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./controllers');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// serve up public dir static files javascript css etc.
app.use(express.static(path.join(__dirname, 'public')));

// use our controller routes
app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`now listening 0n port:${PORT}`));
});
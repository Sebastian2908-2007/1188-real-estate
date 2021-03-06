// requiring native node.js path module
const path = require('path');
const express = require('express');
// sequelize connection
const sequelize = require('./config/connection');
// requiring express.js
const app = express();
// this is express-sslify for redirecting http to https
const enforce = require('express-sslify');
// configuring port
const PORT = process.env.PORT || 3001;
// import helper functions from utils for handlebars
const helpers = require('./utils/helpers');
// require express handlebars
const exphbs = require('express-handlebars');
// activate handlebars and pass in any helper functions
const hbs = exphbs.create({helpers});
// getting all routes for use in as middlewear
const routes = require('./controllers');
// require express session this allows us to create sessions
const session = require('express-session');
// require cinnect session sequelize this connects express session and sequelize
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// require dotenv package to read our .env file for our mySecret in th sess{}
require('dotenv').config();

// make our session object
const sess = {
   secret: process.env.mySecret,
   cookie:{},
   resave: false,
   saveUninitialized: true,
   store: new SequelizeStore({
       db:sequelize
   })
};

// this must be put before any other middleware enforce https you must use enforce.HTTPS({ trustProtoHeader: true }) if you are behind a load balancer e.g. heroku
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// use the sess we created 
app.use(session(sess));
// set  handlebars as our view engine
app.engine('handlebars',hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// serve up public dir static files javascript css etc.
app.use(express.static(path.join(__dirname, 'public')));

// use our controller routes
app.use(routes);



// sync all of my sequelize models with the db for data creation
sequelize.sync({force: false}).then(() => {
    // turning on the server
    app.listen(PORT, () => console.log(`now listening 0n port:${PORT}`));
});
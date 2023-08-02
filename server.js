const path = require('path');
const express = require("express");
const exphbs = require("express-handlebars");
const allRoutes = require("./controllers");
const session = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

// const { User, Admin, Student, Faculty } = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const sess = {
  secret: process.env.DB_SESSION_SECRET,
  cookie: {
    // half an hour
    maxAge: 0.5 * 60 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use("/", allRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ msg: 'Internal Server Error' });
  });

sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
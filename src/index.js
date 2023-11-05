//import { engine } from 'express-handlebars';
const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const port = 3000;


const route = require('./routes');

const db= require('./config/db');

db.connect();

//static file
app.use(express.static(path.join(__dirname, 'public')));

//midleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//http logger
app.use(morgan('combined'));

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

//Route init

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

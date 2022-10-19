const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

//rotas
const UserRoute = require('./Routes/routes');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/users', UserRoute);

module.exports = app;

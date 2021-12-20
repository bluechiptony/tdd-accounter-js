const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('./src/model/user');
const { hashText } = require('./src/helper/auth.helper');
const userRouter = require('./src/routes/user.routes');
const { createUser } = require('./src/controllers/user.controller');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRouter);

module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');
const User = require('./src/model/user');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/api/v1/users', (req, res) => {
  console.log(req.body);
  User.create(req.body).then(() => {
    return res.status(200).send({ message: 'Thanks for signing up. You can now enjoy stuff' });
  });
});

module.exports = app;

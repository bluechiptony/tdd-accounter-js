const express = require('express');
const bodyParser = require('body-parser');
const User = require('./src/model/user');
const { hashText } = require('./src/helper/auth.helper');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/api/v1/users', async (req, res, next) => {
  const user = {
    userName: req.body.userName,
    password: await hashText(req.body.password),
    email: req.body.email,
  };

  User.create(user).then((userResponse) => {
    // console.log(userResponse);
    return res.status(200).send({ message: 'Thanks for signing up. You can now enjoy stuff' });
  });
});

module.exports = app;

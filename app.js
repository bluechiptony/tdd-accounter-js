const express = require('express');

const app = express();

app.post('/api/v1/users', (req, res) => {
  return res.status(200).send({ message: 'Thanks for signing up. You can now enjoy stuff' });
});

module.exports = app;

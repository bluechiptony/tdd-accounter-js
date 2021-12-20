const express = require('express');
const { createUser } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post('/api/v1/users', createUser);

module.exports = userRouter;

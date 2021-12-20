const { createNewUser } = require('../services/user.service');

const createUser = async (req, res, next) => {
  try {
    const user = await createNewUser(req.body);
    res.status(200).send({ message: 'Thanks for signing up. You can now enjoy stuff' });
  } catch (error) {
    res.status(400).send({ message: 'An error occurred' });
  }
};

module.exports = { createUser };

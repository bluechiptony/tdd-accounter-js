const User = require('../model/user');
const { hashText } = require('../helper/auth.helper');

const createNewUser = async (userProspect) => {
  try {
    const hash = await hashText(userProspect.password);
    return await User.create({ ...userProspect, password: hash });
  } catch (error) {
    throw error;
  }
};

module.exports = { createNewUser };

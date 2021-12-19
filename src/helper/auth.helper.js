const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = {
  hashText: async (text) => {
    try {
      const saltSync = await bcrypt.genSaltSync(saltRounds);
      return await bcrypt.hashSync(text, saltSync);
    } catch (error) {
      throw error;
    }
  },
  checkHash: async (text, hashText) => {
    try {
      return await bcrypt.compareSync(text, hashText);
    } catch (error) {
      throw error;
    }
  },
};

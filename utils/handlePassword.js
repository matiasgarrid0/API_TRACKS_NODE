const bcryptjs = require("bcryptjs");

/**
 * password plain without hash
 * @param {*} passwordPLain
 * */

const encrypt = async (passwordPLain) => {
  const hash = await bcryptjs.hash(passwordPLain, 10);
  return hash;
};

const compare = async (passwordPlain, encrypt) => {
    return await bcryptjs.compare(passwordPlain, encrypt)
};

module.exports = { encrypt, compare };

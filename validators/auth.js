const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorRegisterUser = [
  //   check("id").exists().notEmpty().isMongoId(),
  check("name").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("age").exists().notEmpty().isNumeric({ min: 0, max: 99 }),
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];
const validatorLoginUser = [
  //   check("id").exists().notEmpty().isMongoId(),
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

module.exports = { validatorRegisterUser, validatorLoginUser };

const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleHerror");
const { matchedData } = require("express-validator");

/**
 *
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (err) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await tracksModel.findById(id);
    if (data) {
      res.send({ data });
    } else {
      res.send({ message: "not found" });
    }
  } catch (err) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (err) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(id, body);
    res.send({ data });
  } catch (err) {
    handleHttpError(res, "ERROR_UPDATE_ITEMS");
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await tracksModel.findOneAndDelete({ _id: id });
    res.send({ message: "delete success ↓", data });
  } catch (err) {
    handleHttpError(res, "ERROR_DELETE_ITEM");
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };

const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;
const { handleHttpError } = require("../utils/handleHerror");
const { matchedData } = require("express-validator");
const fs = require("fs");

const MEDIA_PATH = `${__dirname}/../storage`;
/**
 *
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
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
    const data = await storageModel.findById(id);
    res.send({ data });
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
    const { body, file } = req;
    const fileData = {
      url: `${PUBLIC_URL}/${file.filename}`,
      filename: `${file.filename}`,
    };
    const data = await storageModel.create(fileData);
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
const updateItem = async (req, res) => {};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const dataFile = await storageModel.findById(id);
    const { filename } = dataFile;
    const filePath = `${MEDIA_PATH}/${filename}`;
    fs.unlinkSync(filePath);
    const data = {
      filePath,
      deleted: true,
    };
    await storageModel.delete({ _id: id });
    res.send({ data });
  } catch (err) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };

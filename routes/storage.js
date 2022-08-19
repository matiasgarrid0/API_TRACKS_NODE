const express = require('express')
const { createItem, getItem, getItems, deleteItem, updateItem } = require('../controllers/storage')
const router = express.Router()
const uploadMiddleware = require('../utils/handleStorage')
const { validatorGetItem } = require('../validators/storage')

//TODO  http://localhost:3001/storage

router.post('/',uploadMiddleware.single('myfile'),createItem)
router.get('/',getItems)
router.get('/:id',getItem)
router.delete('/:id', deleteItem)

module.exports = router
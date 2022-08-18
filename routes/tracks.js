const express = require('express')
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks')
const router = express.Router()
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks')
const customHeader = require('../middlewares/customHeader')

//TODO http://localhost:3001/api/trakcs

router.get('/',getItems)
router.get('/:id', getItem)
router.post('/', validatorCreateItem, createItem)
router.put('/:id', validatorCreateItem, validatorGetItem, updateItem)
router.delete('/:id' ,deleteItem)


module.exports = router
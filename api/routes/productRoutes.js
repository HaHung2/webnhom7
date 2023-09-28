const express = require('express');
const { createOneProduct, updateOneProduct, deleteOneProduct, getAllProduct } = require('../controllers/productController');
var router = express.Router();

router.get("/", getAllProduct);

router.post('/',createOneProduct);

router.patch('/:id', updateOneProduct )

router.delete('/:id', deleteOneProduct)

module.exports = router
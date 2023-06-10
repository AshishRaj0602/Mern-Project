const express = require('express');
const { getAllProduct ,createProduct, updateProduct, deleteProduct, singleProduct} = require('../controllers/productController');
const router = express.Router();

router.route('/product').get(getAllProduct);
router.route('/product/new').post(createProduct);
router.route('/product/:id').put(updateProduct).delete(deleteProduct)
.get(singleProduct);

module.exports =router;
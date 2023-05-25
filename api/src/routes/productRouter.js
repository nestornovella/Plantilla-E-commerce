const axios = require("axios");
const { Router } = require("express");
const { getAllProduct, postProduct, putProduct, getProductById } = require("../controllers/productController");

const router = Router();

router.get('/', getAllProduct);
router.get('/:id', getProductById);
router.post('/', postProduct);
router.put('/:id', putProduct);

module.exports = router
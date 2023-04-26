const axios = require("axios");
const { Router } = require("express");
const { getProduct, postProduct, putProduct } = require("../controllers/productController");

const router = Router();

router.get('/', getProduct);
router.post('/', postProduct);
router.put('/', putProduct);

module.exports = router
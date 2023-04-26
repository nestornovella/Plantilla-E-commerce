const axios = require("axios");
const { Router } = require("express");
const { getShopping, postShopping, putShopping } = require("../controllers/shoppingController");

const router = Router();

router.get('/', getShopping);
router.post('/', postShopping);
router.put('/', putShopping);

module.exports = router
const axios = require("axios");
const { Router } = require("express");
const { getCategory, postCategory, putCategory } = require("../controllers/categoryController");

const router = Router();

router.get('/', getCategory);
router.post('/', postCategory);
router.put('/', putCategory);

module.exports = router
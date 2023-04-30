const axios = require("axios");
const { Router } = require("express");
const { getCategory, postCategory, putCategory, deleteCategory } = require("../controllers/categoryController");

const router = Router();

router.get('/', getCategory);
router.post('/', postCategory);
router.put('/:id', putCategory);
router.delete('/:id', deleteCategory);

module.exports = router
const axios = require("axios");
const { Router } = require("express");
const { getTransaction, postTransaction, putTransaction } = require("../controllers/transactionController");

const router = Router();

router.get('/', getTransaction);
router.post('/', postTransaction);
router.put('/:id', putTransaction);

module.exports = router
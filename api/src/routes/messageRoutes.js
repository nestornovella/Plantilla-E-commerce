const axios = require("axios");
const { Router } = require("express");
const { getMessage, putMessage, postMessage, deleteMessage } = require("../controllers/messageController");

const router = Router();

router.get('/', getMessage);
router.post('/', postMessage);
router.put('/:id', putMessage);
router.delete('/:id', deleteMessage);

module.exports = router
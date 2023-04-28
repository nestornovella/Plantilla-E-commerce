const axios = require("axios");
const { Router } = require("express");
const { getMessage, putMessage, postMessage } = require("../controllers/messageController");

const router = Router();

router.get('/', getMessage);
router.post('/', postMessage);
router.put('/', putMessage);

module.exports = router
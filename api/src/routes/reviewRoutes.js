const axios = require("axios");
const { Router } = require("express");
const { getReview, postReview, putReview } = require("../controllers/reviewController");

const router = Router();

router.get('/', getReview);
router.post('/', postReview);
router.put('/', putReview);

module.exports = router
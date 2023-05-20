const axios = require("axios");
const { Router } = require("express");
const { getReview, postReview, putReview, deleteReview } = require("../controllers/reviewController");

const router = Router();

router.get('/', getReview);
router.post('/', postReview);
router.put('/:id', putReview);
router.delete('/:id', deleteReview);

module.exports = router
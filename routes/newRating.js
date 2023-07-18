const express = require('express');
const router = express.Router();
const ratingService = require('../services/ratings');

router.post('/', async function(req, res, next) {
  try {
    const { Rating, UserId, BookId } = req.body;
    const result = await ratingService.createRating(Rating, UserId, BookId);
    res.json(result);
  } catch (err) {
    console.error('Error while creating rating', err.message);
    next(err);
  }
});

module.exports = router;

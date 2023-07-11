const express = require('express');
const router = express.Router();
const service = require('../services/rating');

/* GET */
router.get('/', async function(req, res, next) {
  try {
    res.json(await service.getTopSellers(req.query.rating));
  } catch (err) {
    console.error(`Error while getting top sellers `, err.message);
    next(err);
  }
});

module.exports = router;
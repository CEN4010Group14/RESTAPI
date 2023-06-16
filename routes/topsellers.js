const express = require('express');
const router = express.Router();
const service = require('../services/topsellers');

/* GET */
router.get('/', async function(req, res, next) {
  try {
    res.json(await service.getTopSellers());
  } catch (err) {
    console.error(`Error while getting top sellers `, err.message);
    next(err);
  }
});

module.exports = router;
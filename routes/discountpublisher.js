const express = require('express');
const router = express.Router();
const service = require('../services/discountpublisher');

router.put('/', async function(req, res, next) {
  try {
    res.json(await service.update(req.query.discount,req.query.publisher));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const books = require('../services/books');

router.post('/', async function(req, res, next) {
    await books.addAuthor(req.body)
})

module.exports = router;
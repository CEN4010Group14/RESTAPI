const express = require('express');
const router = express.Router();
const books = require('../services/books');

/* GET programming languages. */
router.get('/bookByISBN/:ISBN', async function(req, res, next) {
    try {
        const { ISBN } = req.params;
        res.json(await books.getBook(ISBN));
    } catch (err) {
        console.error(`Error while getting Book by ISBN `, err.message);
        next(err);
    }
});

module.exports = router;
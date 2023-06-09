const express = require('express');
const router = express.Router();
const books = require('../services/books');


router.get('/', async function(req, res, next) {
    try {
        const { AuthorId } = req.query
        res.json(await books.getBooksByAuthor(AuthorId));
    } catch (err) {
        console.error(`Error while getting Book by ISBN `, err.message);
        next(err);
    }
});

module.exports = router;
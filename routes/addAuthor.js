const express = require('express');
const router = express.Router();
const books = require('../services/books');

router.post('/', async function(req, res, next) {
    try {
        const id = await books.addAuthor(req.body)
        const re = /(?<=\\"id\_\\"\:)(\d+)/;
        const m = id.r.match(re)[0];
        res.status(201).send({
            message: `Author id ${m} added with success!`
        });
    }
    catch (err) {
        console.error(`Error while posting new Author `, err.message);
        next(err);
    }



})

module.exports = router;
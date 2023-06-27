const express = require('express');
const router = express.Router();
const books = require('../services/books');

router.post('/',  async function(req, res, next) {
    try {
        // const {ISBN, Rating, GenreId, PublisherId, Year, Copies, Description, FirstName, LastName}
        //     = req.body
        // console.log(`LastName ${LastName}`)
        const r = await books.newBook(req.body)
        // console.log(`keys for r ${Object.keys(r)}`);
        const re = /\d{13}/;
        const m = r.r.match(re)[0];
        res.status(201).send({
            message: `Book ISBN ${m} added with success!`
        })

    }
    catch (err) {
        console.error(`Error while posting new Book `, err.message);
        next(err);
    }

});

module.exports = router;
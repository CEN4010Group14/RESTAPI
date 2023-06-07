const express = require('express');
const router = express.Router();
const books = require('../services/books');
const upload = require('multer')();

router.post('/',  upload.any(), async function(req, res, next) {
    try {
        // const {ISBN, Rating, GenreId, PublisherId, Year, Copies, Description, FirstName, LastName}
        //     = req.body
        // console.log(`LastName ${LastName}`)
        const r = await books.newBook(req.body)
        console.log(r)
    }
    catch (err) {
        console.error(`Error while posting new Book `, err.message);
        next(err);
    }

});

module.exports = router;
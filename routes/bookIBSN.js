const express = require('express');
const router = express.Router();
const books = require('../services/books');
const {fa} = require("faker/lib/locales");

/* GET book by ISBN */
router.get('/', async function(req, res, next) {
    try {
        const { ISBN } = req.query
        const result = await books.getBookByISBN(ISBN);
        const s = JSON.stringify(result);
        // console.log(`s: ${s}`)
        if (s === '{"row":[]}') return res.json({success: false, result: `ISBN ${ISBN} not found`});
        return res.json(result);
    } catch (err) {
        console.error(`Error while getting Book by ISBN `, err.message);
        next(err);
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const books = require('../services/books');

router.post('/',  async function(req, res, next) {
    try {
        // const {ISBN, Rating, GenreId, PublisherId, Year, Copies, Description, FirstName, LastName}
        //     = req.body
        // console.log('are you alive here?')
        // console.log(`FirstName ${req.body.FirstName}`)
        const r = await books.newBook(req.body)
        try {
            // console.log(`JSON.parse(r.r) ${ Object.keys(JSON.parse(r.r))}`);
            const j = JSON.parse(r.r);
            // console.log(`j.message ${j.message}`);
            // console.log(`j.success ${j.success}`);
            if (!j.success) {
                res.status(404).send({message: j.message})
                return
            }

        }
        catch (e) {
//            console.log(`newBook source e ${e}`)
        }
        // console.log(`r.r ${r.r}`)
        // console.log(`keys for r.r ${Object.keys(r.r)}`);
         //console.log(`r.r.keys() ${r.r.keys()}`);
        const re = /\d{13}/;
        const m = r.r.match(re)[0];
        res.status(201).send({
            message: `Book ISBN ${m} added with success!`
        })

    }
    catch (err) {
        res.status(404).send(err.message);
        // console.error(`Error while posting new Book `, err.message);
        // next(err);
    }

});

module.exports = router;
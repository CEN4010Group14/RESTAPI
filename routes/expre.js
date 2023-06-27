const express = require('express');
const router = express.Router();
const services = require('../services/expre');
/* GET */
router.get('/', async function(req, res, next) {
    try {
        res.json(await service.getByid(req.query.expre));
    } catch (err) {
        console.error(`Error while getting genres `, err.message);
        next(err);
    }
});
// POST /api/credit-cards
router.post('/', async (req, res) => {
    try {
      const { username, cardNumber, expirationDate} = req.body;
      console.log(cardNumber,expirationDate)
      await services.createCreditCard(username, cardNumber, expirationDate);
      res.sendStatus(201);
    } catch (err) {
      console.error('Error creating credit card:', err);
      res.status(500).send('Error creating credit card');

    }
  });
module.exports = router;